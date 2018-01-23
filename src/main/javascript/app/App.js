'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Nav from './components/Nav';
import AirportActions from './actions/AirportsActions';
import ListView from './components/ListView';
import GridView from './components/GridView';
import Toolbar from './components/Toolbar';

class Departure extends React.Component {

    static propTypes = {
        departure: PropTypes.object.isRequired,
        airline: PropTypes.object.isRequired,
        flight: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        let d = this.props.departure;
        let t = d.scheduledTime.time;
        return (
            <tr>
                <td>{this.props.flight.icaoNumber}</td>
                <td>{this.props.airline.name}</td>
                <td>{(t.hour < 10 ? '0' + t.hour : t.hour)}:{(t.minute < 10 ? '0' + t.minute : t.minute)}</td>
            </tr>
        );
    }
}

class TimetableHead extends React.Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <thead>
            <tr>
                <th>ICAO</th>
                <th>Airline</th>
                <th>Time</th>
            </tr>
            </thead>
        );
    }
}

class Modal extends React.Component {

    static propTypes = {
        airport: PropTypes.object.isRequired,
        info: PropTypes.object.isRequired,
        onHide: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            timetable: undefined,
            lastMinutes: 15
        };
    }

    componentDidMount() {
        window.$('.modal').modal('show');
        window.$('.modal').on('hidden.bs.modal', () => {
            this.setState({timetable: undefined});
            this.props.onHide();
        });
        this._loadTimetable();
    }

    render() {
        return (
            <div className="modal fade" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Timetable - {this.props.airport.name}</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-xs-12">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="time">Last minutes</label>
                                            <select id="time" className="form-control" value={this.state.lastMinutes}
                                                    onChange={this._changeLastMinutes}>
                                                <option>15</option>
                                                <option>30</option>
                                                <option>45</option>
                                                <option>60</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <table className="table table-striped table-hover">
                                        <caption>Departures</caption>
                                        <TimetableHead/>
                                        <tbody>
                                        {this._renderDepartures()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <table className="table table-striped table-hover">
                                        <caption>Arrivals</caption>
                                        <TimetableHead/>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    _renderDepartures = () => {
        if (this.state.timetable) {
            return this.state.timetable
                .filter((t) => t.type === 'departure')
                .map((t, i) => {
                    return <Departure key={'d_' + i} departure={t.departure} airline={t.airline} flight={t.flight}/>
                });
        }
        return null;
    };

    _changeLastMinutes = (e) => {
        let val = e.target.value;
        this.setState({lastMinutes: val}, this._loadTimetable);
    };

    _loadTimetable = () => {
        AirportActions.departures(this.props.airport.codeIataAirport, this.state.lastMinutes).then((timetable) => {
            this.setState({timetable: timetable});
        });
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            airports: [],
            listView: true,
            airport: undefined,
            info: undefined
        }
    }

    componentDidMount() {
        AirportActions.findTop10().then((airports) => {
            this.setState({airports: airports});
        });
    }

    render() {
        return (
            <div>
                <Nav name={window.user.name}/>
                {this._renderMainBlock()}
                {this._renderModal()}
            </div>
        );
    }

    _renderMainBlock = () => {
        if (this.state.airports.length === 10) {
            return (
                <div className="container">
                    <Toolbar listView={this.state.listView} onViewChanged={this._changeView}/>
                    {this._renderView()}
                </div>
            );
        }
        return (
            <div className="container">
                <div className="col-xs-12 text-center">
                    <h1>Loading...</h1>
                    <progress max={10} value={this.state.airports.length}/>
                </div>
            </div>
        )
    };

    _renderView = () => {
        if (this.state.listView) {
            return <ListView airports={this.state.airports} onClick={this._select}/>;
        }
        return <GridView airports={this.state.airports} onClick={this._select}/>;
    };

    _changeView = (val) => {
        this.setState({listView: val});
    };

    _renderModal = () => {
        if (this.state.airport && this.state.info) {
            return <Modal airport={this.state.airport} info={this.state.info} onHide={this._unselect}/>;
        }
        return null;
    };

    _select = (airport, info) => {
        this.setState({airport: airport, info: info});
    };

    _unselect = () => {
        this.setState({airport: undefined, info: undefined});
    }
}

export default App;