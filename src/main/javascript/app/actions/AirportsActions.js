'use strict';

import Request from '../util/Request';
import Airport from '../models/Airport';

const mashapeKey = '8Ffcxj7vWSmshieDUwKG60XulxALp1h34sjjsn6n9SuIl43i8c';
const mashapeUrl = 'https://flightlookup-airporttimetable-rest.p.mashape.com';

class AirportsActions {
    static findTop10() {
        return Request.get('/api/top_10_airports').then((data) => {
            let parsed = JSON.parse(data);
            return parsed.map((a) => new Airport(a));
        });
    }

    static departures(iata, lastMinutes) {
        return Request.get('/api/timetable?iata=' + iata + '&last_minutes=' + lastMinutes).then((data) => {
            return JSON.parse(data);
        });
    }

    static findDepartures(iata) {
        // NOT WORKING!!!
        // let headers = {
        //     'X-Mashape-Key': mashapeKey,
        //     'Accept': 'text/plain'
        // };
        // return Request.get(mashapeUrl + '/AirportTimeTable/' + iata + '/depart/01/23/2018/?Hops=NONSTOP&SortOrder=1', undefined, headers)
        //     .then((data) => {
        //         let parsed = JSON.parse(data);
        //         console.log(parsed);
        //         return parsed;
        //     });
    }

    static findArrivals(iata) {
        // NOT WORKING!!!
        // let headers = {
        //     'X-Mashape-Key': mashapeKey,
        //     'Accept': 'text/plain'
        // };
        // return Request.get(mashapeUrl + '/AirportTimeTable/' + iata + '/arrive/01/23/2018/?Hops=NONSTOP&SortOrder=0', undefined, headers)
        //     .then((data) => {
        //         let parsed = JSON.parse(data);
        //         console.log(parsed);
        //         return parsed;
        //     });
    }
}

export default AirportsActions;