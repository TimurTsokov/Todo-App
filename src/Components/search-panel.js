import React from 'react';
import ItemStatusFilter from './item-status-filter'
import './sass/search-panel.sass'

const SearchPanel = () => {
    return (
        <div className="search-input">
            <input type="text" placeholder="search"/>
            <ItemStatusFilter/>
        </div>
    )
};
export default SearchPanel;