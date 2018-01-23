package app.models;

import java.time.LocalDateTime;

public class Departure {

    private String iataCode;
    private String icaoCode;
    private LocalDateTime scheduledTime;
    private LocalDateTime estimatedRunway;
    private LocalDateTime actualRunway;

    public Departure() {}

    public Departure(String iataCode, String icaoCode, LocalDateTime scheduledTime, LocalDateTime estimatedRunway, LocalDateTime actualRunway) {
        this.iataCode = iataCode;
        this.icaoCode = icaoCode;
        this.scheduledTime = scheduledTime;
        this.estimatedRunway = estimatedRunway;
        this.actualRunway = actualRunway;
    }

    public String getIataCode() {
        return iataCode;
    }

    public Departure setIataCode(String iataCode) {
        this.iataCode = iataCode;
        return this;
    }

    public String getIcaoCode() {
        return icaoCode;
    }

    public Departure setIcaoCode(String icaoCode) {
        this.icaoCode = icaoCode;
        return this;
    }

    public LocalDateTime getScheduledTime() {
        return scheduledTime;
    }

    public Departure setScheduledTime(LocalDateTime scheduledTime) {
        this.scheduledTime = scheduledTime;
        return this;
    }

    public LocalDateTime getEstimatedRunway() {
        return estimatedRunway;
    }

    public Departure setEstimatedRunway(LocalDateTime estimatedRunway) {
        this.estimatedRunway = estimatedRunway;
        return this;
    }

    public LocalDateTime getActualRunway() {
        return actualRunway;
    }

    public Departure setActualRunway(LocalDateTime actualRunway) {
        this.actualRunway = actualRunway;
        return this;
    }
}
