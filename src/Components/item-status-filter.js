import React, {Component} from 'react';
import './sass/item-status-filter.sass'

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="btn-group">
                <button className="btn btn-info" type="button">All</button>
                <button className="btn btn-outline-second" type="button">Active</button>
                <button className="btn btn-outline-second" type="button">Done</button>
            </div>
        )
    }
}
