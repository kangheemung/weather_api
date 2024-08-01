import { Button } from 'react-bootstrap';
import React, { useState } from 'react';

const WeatherButton = ({ cities, handleCityChange, selectedCity }) => {
    return (
        <div className="WeatherButton_contanin">
            <Button
                variant={`${selectedCity == null ? 'outline-warning' : 'primary'}`}
                onClick={() => handleCityChange('current')}>
                Current Location
            </Button>
            {cities.map((city) => (
                <Button
                    variant={selectedCity === city ? 'outline-warning' : 'primary'}
                    onClick={() => handleCityChange(city)}>
                    {city}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;
