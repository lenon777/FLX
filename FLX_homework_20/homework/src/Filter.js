import React, { Component } from 'react';

class Filter extends Component {


    render() {
        return (
            <div>
                <button className="filter-button">All </button>
                <button className="filter-button">Favorite</button>
            </div>
        )
    }
}
export { Filter };