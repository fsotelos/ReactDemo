import React, { useState, useEffect } from 'react';
import './styles/Clock.css';

const Clock = ({ timeZone, label }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const options = {
        timeZone,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(time);

    return (
        <div className="clock">
            <div className='headerClock'>
                <h2>{label}</h2>
            </div>
            <div className='bodyClock'>
                <p>{formattedTime}</p>
            </div>
        </div>
    );
};



export default Clock;
