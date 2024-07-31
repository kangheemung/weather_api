import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity }) => {
    console.log('cites?', cities);

    return (
        <div>
            <Button className="weather_button" variant="primary">
                Current Location
            </Button>
            {cities.map((item, index) => (
                <Button key={index} variant="primary" onClick={() => setCity(item)}>
                    {item}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;
