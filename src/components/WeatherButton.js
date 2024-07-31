import { Button } from 'react-bootstrap';
import React, { useState } from 'react';

const WeatherButton = ({ cities, setCity, activeButton, setActiveButton }) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const handleButtonClick = (item, index) => {
        setCity(item);
        setActiveButton(item);
        setActiveIndex(index);
    };

    const getCurrentLocationWeather = () => {
        setCity(''); // Reset city to trigger fetching current location weather
    };

    return (
        <div className="WeatherButton_contanin">
            <Button
                className={`weather_button ${activeButton === '' ? 'active' : ''}`}
                variant="primary"
                onClick={() => handleButtonClick('')}>
                Current Location
            </Button>
            {cities.map((item, index) => (
                <Button
                    key={index}
                    className={`weather_button ${activeButton === item ? 'active' : ''}`}
                    variant="primary"
                    onClick={() => handleButtonClick(item, index)}>
                    {item}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;
