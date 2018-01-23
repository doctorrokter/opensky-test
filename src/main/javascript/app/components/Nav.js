'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class Nav extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default z-depth-1">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                   aria-expanded="false">{this.props.name} <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="/logout">Log out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;