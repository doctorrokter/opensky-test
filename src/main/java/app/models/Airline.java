package app.models;

public class Airline {

    private String name;
    private String iataCode;
    private String icaoCode;

    public Airline() {}

    public Airline(String name, String iataCode, String icaoCode) {
        this.name = name;
        this.iataCode = iataCode;
        this.icaoCode = icaoCode;
    }

    public String getName() {
        return name;
    }

    public Airline setName(String name) {
        this.name = name;
        return this;
    }

    public String getIataCode() {
        return iataCode;
    }

    public Airline setIataCode(String iataCode) {
        this.iataCode = iataCode;
        return this;
    }

    public String getIcaoCode() {
        return icaoCode;
    }

    public Airline setIcaoCode(String icaoCode) {
        this.icaoCode = icaoCode;
        return this;
    }
}
