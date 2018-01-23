'use strict';

import PropTypes from 'prop-types';
import Airport from '../models/Airport';
import React from 'react';
import Countries from '../const/Countries';
import AirportsService from '../services/AirportsService';

class Card extends React.Component {
    static propTypes = {
        airport: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        let a = this.props.airport;
        let info = AirportsService.findByIata(this.props.airport.codeIataAirport);
        let onClick = () => {
            this.props.onClick(a, info);
        };
        return (
            <div className="col-xs-12 col-sm-4" onClick={onClick}>
                <div className="panel panel-default panel-hoverable z-depth-1">
                    <div className="panel-heading">
                        <img src={'/images/flags/' + a.codeIso2Country.toLowerCase() + '.svg'} width="40"/>
                        <span className="margin-left-15">{Countries[a.codeIso2Country]} ({a.codeIso2Country})</span>
                    </div>
                    <div className="panel-body">
                        <div>
                            <span className="glyphicon glyphicon-send"> {a.name} ({a.codeIataAirport})</span>
                        </div>
                        <div>
                            <span className="glyphicon glyphicon-stats"> {info['city']} ({a.codeIataCity})</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Row extends React.Component {
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
                {this._fill()}
            </div>
        );
    }

    _fill = () => {
        return this.props.airports.map((a, i) => {
            return <Card key={'airport_' + a.id + '_' + i} airport={a} onClick={this.props.onClick}/>;
        });
    }
}

class GridView extends React.Component {

    static propTypes = {
        airports: PropTypes.arrayOf(PropTypes.instanceOf(Airport)),
        onClick: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this._fill()}
            </div>
        );
    }

    _fill = () => {
        let rows = [];
        let airports = [];
        this.props.airports.forEach((a, i) => {
            if (i !== 0 && (i % 3 === 0)) {
                rows.push(<Row key={'row_' + a.id + '_' + i} airports={airports.slice()} onClick={this.props.onClick}/>);
                airports.length = 0;
            }
            airports.push(a);
            if (i === this.props.airports.length - 1) {
                rows.push(<Row key={'row_' + a.id + '_ ' + i} airports={airports.slice()} onClick={this.props.onClick}/>);
                airports.length = 0;
            }
        });
        return rows;
    }
}

export default GridView;