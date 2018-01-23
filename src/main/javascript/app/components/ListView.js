'use strict';

import PropTypes from 'prop-types';
import Airport from '../models/Airport';
import React from 'react';
import Countries from '../const/Countries';
import AirportsService from '../services/AirportsService';

class ListView extends React.Component {

    static propTypes = {
        airports: PropTypes.arrayOf(PropTypes.instanceOf(Airport)),
        onClick: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="panel panel-default z-depth-1">
                        <div className="panel-body">
                            <table className="table table-striped table-hover">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Country</th>
                                    <th>Name</th>
                                    <th>City</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this._fill()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    _fill = () => {
        return this.props.airports.map((a, i) => {
            let info = AirportsService.findByIata(a.codeIataAirport);
            let onClick = () => {
                this.props.onClick(a, info);
            };
            return (
                <tr key={'airport_' + a.id + '_' + i} onClick={onClick}>
                    <td>{a.id}</td>
                    <td>
                        <img src={'/images/flags/' + a.codeIso2Country.toLowerCase() + '.svg'} width="40"/>
                        <span className="margin-left-15">{Countries[a.codeIso2Country]} ({a.codeIso2Country})</span>
                    </td>
                    <td>{a.name} ({a.codeIataAirport})</td>
                    <td>{info['city']} ({a.codeIataCity})</td>
                </tr>
            );
        });
    }
}

export default ListView;