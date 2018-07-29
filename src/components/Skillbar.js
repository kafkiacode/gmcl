import React from 'react';

const Skillbar = ({
    title,
    percentage,
}) => (
    <li>
        <h4>{title}</h4>
        <div className="progress">
            <div className="percentage" style={{width:`${percentage}%`}}>
            </div>
        </div>
    </li>
);

export default Skillbar;
