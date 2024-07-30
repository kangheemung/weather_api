import React from 'react';
const Weatherbox = ({ weather }) => {
    console.log('weather?', weather);

    const kelvinToCelsius = (kelvin) => kelvin - 273.15;
    if (!weather) {
        return <div>Loading...</div>; // Render a loading message or spinner while weather data is being fetched
    }
    return (
        <div>
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
                                        {Math.floor(kelvinToCelsius(weather?.main.temp))}°C
                                    </h3>
                                </div>
                                <div>
                                    <h3 id="wether_city" className="wether_city">
                                        {weather?.name}
                                    </h3>
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
                                Low: {Math.floor(kelvinToCelsius(weather?.main.temp_min))}°C
                            </h3>
                            <h3 id="SeoulHightemp" className="SeoulHightemp">
                                High: {Math.floor(kelvinToCelsius(weather?.main.temp_max))}°C
                            </h3>
                            <h3 id="humidity" className="humidity">
                                Humidity: {weather?.main.humidity}%
                            </h3>
                            <h3 id="weather_wind" className="weather_wind">
                                Wind Speed: {weather?.wind.speed} m/s, Wind Direction: {weather?.wind.deg}°
                            </h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Weatherbox;
