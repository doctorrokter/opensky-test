'use strict';

class StateVector {
    constructor() {
        this.icao24 = '';
        this.callSign = '';
        this.originCountry = '';
        this.timePosition = 0;
        this.lastContact = 0;
        this.longitude = 0.0;
        this.latitude = 0.0;
        this.geoAltitude = 0.0;
        this.onGround = false;
        this.velocity = 0.0;
        this.heading = 0.0;
        this.verticalRate = 0.0;
        this.sensors = [];
        this.baroAltitude = 0.0;
        this.squawk = '';
        this.spi = false;
        this.positionSource = 0;
    }
}

export default StateVector;