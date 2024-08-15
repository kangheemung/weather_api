import React from 'react';

const Weatherbox = ({ weather }) => {
    if (!weather || !weather.main || !weather.weather || !weather.weather[0]) {
        return <div>Loading...</div>;
    }

    const kelvinToCelsius = (kelvin) => kelvin - 273.15;
    const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

    return (
        <div className="weather_contain">
<div>
                <section>
                    <div id="output"></div>
                    <div className="weather_box">
                        <span className="nowtime"></span>
                        <div className="weather_top">
                            <div className="weather_info">
                                오늘의 날씨
                                <div>
                                    <h3 id="SeoulNowtemp" className="SeoulNowtemp">
                                        {Math.floor(weather?.main.temp)}°C /{' '}
                                        {celsiusToFahrenheit(Math.floor(weather?.main.temp))}°F
                                    </h3>
                                </div>
                                <div>
                                    <h3 id="wether_city" className="wether_city">
                                        {weather?.name}
                                    </h3>
                                    <p id="wether_stylee" className="wether_stylee">
                                        {weather?.weather[0].description}
                                    </p>
                                </div>
                            </div>
                            <div className="weather_info_img">
                                <div>
                                    <h3 id="weather_img" className="weather_img">
                                        <img
                                            className="weather_img_icon"
                                            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
                                            alt="Weather Icon"
                                        />
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="side_curent_weather">
                            <h3 id="SeoulLowtemp" className="SeoulLowtemp">
                                Low: {Math.floor(weather?.main.temp_min)}°C
                            </h3>
                            <h3 id="SeoulHightemp" className="SeoulHightemp">
                                High: {Math.floor(weather?.main.temp_max)}°C
                            </h3>
                            <h3 id="humidity" className="humidity">
                                Humidity: {weather?.main.humidity}%
                            </h3>
                            <h3 id="weather_wind" className="weather_wind">
                                <p>Wind Speed: {weather?.wind.speed} m/s</p>
                                <p> Wind Direction: {weather?.wind.deg}°</p>
                            </h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Weatherbox;
