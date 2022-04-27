import React, { useState, useEffect } from 'react';

const ThisTime = () => {
    const [thisTime, setThisTime] = useState()
    function timer(time) {
        setThisTime(time)
    }
    // useEffect(() => {
    setInterval(() => {
        timer(new Date().toLocaleTimeString());
    }, 1000)
    // }, [time])
    return (
        <div>
            {thisTime}
        </div>
    );
};

export default ThisTime;