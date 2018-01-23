package app.models;

public class Airport {

    private int airportId;
    private String nameAirport;
    private String codeIataAirport;
    private String codeIso2Country;
    private String codeIataCity;

    public Airport() {}

    public Airport(int airportId, String nameAirport, String codeIataAirport, String codeIso2Country, String codeIataCity) {
        this.airportId = airportId;
        this.nameAirport = nameAirport;
        this.codeIataAirport = codeIataAirport;
        this.codeIso2Country = codeIso2Country;
        this.codeIataCity = codeIataCity;
    }

    public int getAirportId() {
        return airportId;
    }

    public Airport setAirportId(int airportId) {
        this.airportId = airportId;
        return this;
    }

    public String getNameAirport() {
        return nameAirport;
    }

    public Airport setNameAirport(String nameAirport) {
        this.nameAirport = nameAirport;
        return this;
    }

    public String getCodeIataAirport() {
        return codeIataAirport;
    }

    public Airport setCodeIataAirport(String codeIataAirport) {
        this.codeIataAirport = codeIataAirport;
        return this;
    }

    public String getCodeIso2Country() {
        return codeIso2Country;
    }

    public Airport setCodeIso2Country(String codeIso2Country) {
        this.codeIso2Country = codeIso2Country;
        return this;
    }

    public String getCodeIataCity() {
        return codeIataCity;
    }

    public Airport setCodeIataCity(String codeIataCity) {
        this.codeIataCity = codeIataCity;
        return this;
    }
}
