'use strict';

import Airports from '../const/Airports';

class AirportsService {
    findByIata(iata) {
        return Airports.find((a) => a['iata'] === iata);
    }
}

export default new AirportsService();