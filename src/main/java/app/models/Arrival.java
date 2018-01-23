package app.models;

import java.time.LocalDateTime;

public class Arrival {

    private String iataCode;
    private String icaoCode;
    private LocalDateTime estimatedRunway;
    private LocalDateTime actualRunway;

    public Arrival() {}

    public Arrival(String iataCode, String icaoCode, LocalDateTime estimatedRunway, LocalDateTime actualRunway) {
        this.iataCode = iataCode;
        this.icaoCode = icaoCode;
        this.estimatedRunway = estimatedRunway;
        this.actualRunway = actualRunway;
    }

    public String getIataCode() {
        return iataCode;
    }

    public Arrival setIataCode(String iataCode) {
        this.iataCode = iataCode;
        return this;
    }

    public String getIcaoCode() {
        return icaoCode;
    }

    public Arrival setIcaoCode(String icaoCode) {
        this.icaoCode = icaoCode;
        return this;
    }

    public LocalDateTime getEstimatedRunway() {
        return estimatedRunway;
    }

    public Arrival setEstimatedRunway(LocalDateTime estimatedRunway) {
        this.estimatedRunway = estimatedRunway;
        return this;
    }

    public LocalDateTime getActualRunway() {
        return actualRunway;
    }

    public Arrival setActualRunway(LocalDateTime actualRunway) {
        this.actualRunway = actualRunway;
        return this;
    }
}
