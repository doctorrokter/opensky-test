package app;

import app.models.*;
import com.google.gson.Gson;
import spark.ModelAndView;
import spark.template.freemarker.FreeMarkerEngine;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static app.models.TimetableEntity.Status.landed;
import static app.models.TimetableEntity.Type.departure;
import static app.util.Util.getEnv;
import static org.javalite.common.Convert.toInteger;
import static spark.Spark.*;
import static app.util.Util.isStaticResourceRequest;

public class Main {
    public static void main(String[] args) {
        Gson gson = new Gson();
        List<Airport> airports = new ArrayList<>();
        airports.add(new Airport(4329, "Heathrow", "LHR", "GB", "LON"));
        airports.add(new Airport(3009, "Haneda Airport", "HND", "JP", "TYO"));
        airports.add(new Airport(2967, "Hong Kong International", "HKG", "HK", "HKG"));
        airports.add(new Airport(6392, "Shanghai Pudong International", "PVG", "CN", "SHA"));
        airports.add(new Airport(1966, "Dubai", "DXB", "AE", "DXB"));
        airports.add(new Airport(1203, "Charles De Gaulle", "CDG", "FR", "PAR"));
        airports.add(new Airport(6035, "Beijing Capital International", "PEK", "CN", "BJS"));
        airports.add(new Airport(5818, "Chicago O'hare International", "ORD", "US", "CHI"));
        airports.add(new Airport(4189, "Los Angeles International", "LAX", "US", "LAX"));
        airports.add(new Airport(411, "Hartsfield-jackson Atlanta International", "ATL", "US", "ATL"));

//        port(8080);
        port(Integer.valueOf(System.getenv("PORT")));

        staticFileLocation("/public");

        before((req, resp) -> {
            if (!isStaticResourceRequest(req) && !req.url().contains("login")) {
                if (req.session().attribute("user") == null) {
                    resp.redirect("/login");
                    return;
                }
            }
        });

        get("/login", (req, resp) -> {
            return render(null, "login.ftl");
        });

        get("/logout", (req, resp) -> {
            req.session().attribute("user", null);
            resp.redirect("/login");
            return "ok";
        });

        get("/dashboard", (req, resp) -> {
            Map<String, Object> params = new HashMap<>();
            Map<String, Object> userMap = req.session().attribute("user");
            params.put("user", gson.toJson(userMap));
            params.put("message", "Loading...");
//            params.put("env", getEnv());
            params.put("env", "production");
            return render(params, "dashboard.ftl");
        });

        get("/api/top_10_airports", (req, resp) -> gson.toJson(airports));

        get("/api/timetable", (req, resp) -> {
            String iata = req.queryParams("iata");
            int lastMinutes = toInteger(req.queryParams("last_minutes"));

            List<TimetableEntity> departures = new ArrayList<>();
            Departure d1 = new Departure("LAX", "LAX", LocalDateTime.now(), LocalDateTime.now().plus(1, ChronoUnit.HOURS), LocalDateTime.now());
            Arrival a1 = new Arrival("HND", "HND",  LocalDateTime.now().plus(1, ChronoUnit.HOURS),  LocalDateTime.now());
            Airline al1 = new Airline("American Airlines", "AA", "AAL");
            Flight f1 = new Flight(666, "5Y302", "GTI302");
            departures.add(new TimetableEntity(departure, landed, d1, a1, al1, f1));

            Departure d2 = new Departure("LAX", "LAX", LocalDateTime.now().minus(18, ChronoUnit.MINUTES), LocalDateTime.now().plus(1, ChronoUnit.HOURS), LocalDateTime.now().plus(10, ChronoUnit.MINUTES));
            Arrival a2 = new Arrival("LHR", "LHR",  LocalDateTime.now().plus(45, ChronoUnit.MINUTES),  LocalDateTime.now());
            Airline al2 = new Airline("Aeroflot Russian Airlines", "SU", "AFL");
            Flight f2 = new Flight(667, "5Y303", "GTI303");
            departures.add(new TimetableEntity(departure, landed, d2, a2, al2, f2));

            Departure d3 = new Departure("LAX", "LAX", LocalDateTime.now().minus(40, ChronoUnit.MINUTES), LocalDateTime.now().plus(1, ChronoUnit.HOURS), LocalDateTime.now().plus(20, ChronoUnit.MINUTES));
            Arrival a3 = new Arrival("LHR", "LHR",  LocalDateTime.now().plus(45, ChronoUnit.MINUTES),  LocalDateTime.now());
            Airline al3 = new Airline("Alliance Airlines", "QQ", "UTY");
            Flight f3 = new Flight(668, "5Y308", "GTI308");
            departures.add(new TimetableEntity(departure, landed, d3, a3, al3, f3));

            Departure d4 = new Departure("LAX", "LAX", LocalDateTime.now().minus(55, ChronoUnit.MINUTES), LocalDateTime.now().plus(1, ChronoUnit.HOURS), LocalDateTime.now().plus(15, ChronoUnit.MINUTES));
            Arrival a4 = new Arrival("LHR", "LHR",  LocalDateTime.now().plus(55, ChronoUnit.MINUTES),  LocalDateTime.now());
            Airline al4 = new Airline("American Airlines", "AA", "AAL");
            Flight f4 = new Flight(668, "5Y309", "GTI309");
            departures.add(new TimetableEntity(departure, landed, d4, a4, al4, f4));

            return gson.toJson(
                    departures.stream()
                            .filter(t -> {
                                        boolean iataEquals = t.getDeparture().getIataCode().equals(iata);
                                        LocalDateTime prevDate = LocalDateTime.now().minus(lastMinutes, ChronoUnit.MINUTES);
                                        LocalDateTime scheduled = t.getDeparture().getScheduledTime();
                                        if (iataEquals)
                                            return scheduled.isEqual(prevDate) || scheduled.isAfter(prevDate);
                                        return false;
                                    }
                            ).collect(Collectors.toList())
            );
        });

        post("/login", (req, resp) -> {
            String name = req.queryParams("name");
            String password = req.queryParams("password");
            if (name.equals("demo") && password.equals("demo")) {
                User user = new User();
                user.setId(1);
                user.setName(name);
                req.session().attribute("user", user.toMap());
                resp.redirect("/dashboard");
            } else {
                resp.redirect("/login");
            }
            return "ok";
        });
    }

    private static String render(Map<String, Object> params, String template) {
        return new FreeMarkerEngine().render(new ModelAndView(params, template));
    }
}
