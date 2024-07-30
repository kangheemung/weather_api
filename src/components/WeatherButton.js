import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
    return (
        <div>
            <Button className="weather_button" variant="primary">
                Current Location
            </Button>
            <Button className="weather_button" variant="primary">
                Tokyo
            </Button>
            <Button className="weather_button" variant="primary">
                Seoul
            </Button>
            <Button className="weather_button" variant="primary">
                New york
            </Button>
            <Button className="weather_button" variant="primary">
                Paris
            </Button>
        </div>
    );
};

export default WeatherButton;
