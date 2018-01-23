package app.models;

public class Flight {

    private int number;
    private String iataNumber;
    private String icaoNumber;

    public Flight() {}

    public Flight(int number, String iataNumber, String icaoNumber) {
        this.number = number;
        this.iataNumber = iataNumber;
        this.icaoNumber = icaoNumber;
    }

    public int getNumber() {
        return number;
    }

    public Flight setNumber(int number) {
        this.number = number;
        return this;
    }

    public String getIataNumber() {
        return iataNumber;
    }

    public Flight setIataNumber(String iataNumber) {
        this.iataNumber = iataNumber;
        return this;
    }

    public String getIcaoNumber() {
        return icaoNumber;
    }

    public Flight setIcaoNumber(String icaoNumber) {
        this.icaoNumber = icaoNumber;
        return this;
    }
}
