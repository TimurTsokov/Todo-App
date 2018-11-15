import React from 'react';
import './css/phone.css';

const Phone = () => {
    return (
        <div className="phone">
            <ul className="phone__list">
                <li className="active">+15</li>
                <li>+450</li>
                <li>+280</li>
                <li>+56</li>
                <li>+50</li>
                <li>+75</li>
                <li>+380</li>
            </ul>
            <div className="phone__number">
                <span className="input" data-input-name="phone">__ - ___ - __ - __</span>
                <div className="button">Активировать</div>
            </div>
        </div>
    )
}

export default Phone;