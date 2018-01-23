package app.models;

public class TimetableEntity {

    private Type type;
    private Status status;
    private Departure departure;
    private Arrival arrival;
    private Airline airline;
    private Flight flight;

    public enum Type {
        departure, arrival
    }

    public enum Status {
        landed
    }

    public TimetableEntity() {}

    public TimetableEntity(Type type, Status status, Departure departure, Arrival arrival, Airline airline, Flight flight) {
        this.type = type;
        this.status = status;
        this.departure = departure;
        this.arrival = arrival;
        this.airline = airline;
        this.flight = flight;
    }

    public Type getType() {
        return type;
    }

    public TimetableEntity setType(Type type) {
        this.type = type;
        return this;
    }

    public Status getStatus() {
        return status;
    }

    public TimetableEntity setStatus(Status status) {
        this.status = status;
        return this;
    }

    public Departure getDeparture() {
        return departure;
    }

    public TimetableEntity setDeparture(Departure departure) {
        this.departure = departure;
        return this;
    }

    public Arrival getArrival() {
        return arrival;
    }

    public TimetableEntity setArrival(Arrival arrival) {
        this.arrival = arrival;
        return this;
    }

    public Airline getAirline() {
        return airline;
    }

    public TimetableEntity setAirline(Airline airline) {
        this.airline = airline;
        return this;
    }

    public Flight getFlight() {
        return flight;
    }

    public TimetableEntity setFlight(Flight flight) {
        this.flight = flight;
        return this;
    }
}
