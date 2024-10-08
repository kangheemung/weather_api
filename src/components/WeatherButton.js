import { Button } from 'react-bootstrap';


const WeatherButton = ({ cities, handleCityChange, selectedCity }) => {
    return (
        <div className="WeatherButton_contanin">
            <Button
                className="weather_button"
                variant={`${selectedCity == null ? 'outline-warning' : 'primary'}`}
                onClick={() => handleCityChange('current')}>
                Current Location
            </Button>
            {cities.map((city) => (
                <Button
                    className="weather_button"
                    variant={selectedCity === city ? 'outline-warning' : 'primary'}
                    onClick={() => handleCityChange(city)}>
                    {city}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;
