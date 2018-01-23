'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class Toolbar extends React.Component {

    static propTypes = {
        listView: PropTypes.bool.isRequired,
        onViewChanged: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <h3>
                        <span>{this.props.listView ? 'List' : 'Grid'}</span>
                        <span onClick={this._changeView}
                              className={'pull-right ' + (this.props.listView ? 'glyphicon glyphicon-th' : 'glyphicon glyphicon-th-list')}/>
                    </h3>
                </div>
            </div>
        );
    }

    _changeView = () => {
        this.props.onViewChanged(!this.props.listView);
    }
}

export default Toolbar;