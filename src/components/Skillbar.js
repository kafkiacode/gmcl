import React from 'react';

const Skillbar = ({
    title,
    percentage,
}) => (
    <li>
        <h3>{title}</h3>
        <div className="progress">
            <div className="percentage" style={{width:`${percentage}%`}}>
            </div>
        </div>
    </li>
);

export default Skillbar;
