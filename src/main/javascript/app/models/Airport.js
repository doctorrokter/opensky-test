'use strict';

class Airport {
    constructor(props) {
        this.id = props.airportId;
        this.codeIataAirport = props.codeIataAirport;
        this.codeIataCity = props.codeIataCity;
        this.codeIso2Country = props.codeIso2Country;
        this.name = props.nameAirport;
    }
}

export default Airport;