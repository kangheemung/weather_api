import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import WeatherButton from './components/WeatherButton';
import Header from './Header';
import Weatherbox from './components/Weatherbox';
const api_key = process.env.REACT_APP_API_KEY;

function App() {
    //app기능
    //현재 위치 기반의 날씨가 보인다.
    //2.날씨 정보에는 도시 ,섭씨 화씨 날씨상태
    //5개의 버튼이 있다.(1개는 현재 위치 다른 도시)
    //현재위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
    //데이터를들고 오는 동안 로딩 스핀어가 돈다.
    //useEffct에는 파라미터가 2개 들어간다.
    /////////////////////////////////////////
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon); // Fixed function name here
            console.log('현재위치', lat, lon);
        });
    };
    const getWeatherByCurrentLocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log('data', data);
        updateWeatherUI(data);
    };
    const updateWeatherUI = (weatherData) => {
        const kelvinTemp = weatherData.main.temp;
        const kelvinToCelsius = (kelvin) => {
            return kelvin - 273.15; // Convert Kelvin to Celsius
        };
        const celsiusTemp = kelvinToCelsius(kelvinTemp);
        document.getElementById('SeoulNowtemp').textContent = celsiusTemp.toFixed(2); // Rounded to 2 decimal places
        const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
        document.getElementById(
            'weather_img'
        ).innerHTML = `<img src="${iconUrl}" alt="Weather Icon" class="large-icon">`;
        document.getElementById('wether_city').textContent = weatherData.name;
        document.getElementById('SeoulLowtemp').textContent = `Low: ${Math.floor(
            kelvinToCelsius(weatherData.main.temp_min)
        )}°C`;
        document.getElementById('SeoulHightemp').textContent = `High: ${Math.floor(
            kelvinToCelsius(weatherData.main.temp_max)
        )}°C`;

        document.getElementById('humidity').textContent = `Humidity: ${weatherData.main.humidity}%`;

        document.getElementById(
            'weather_wind'
        ).textContent = `Wind Speed: ${weatherData.wind.speed} m/s, Wind Direction: ${weatherData.wind.deg}°`;
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY;
        console.log('API Key:', apiKey);
    }, []);

    return (
        <div className="App">
            <Header />
            <Weatherbox />
            <WeatherButton />
        </div>
    );
}

export default App;
