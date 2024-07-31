import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import WeatherButton from './components/WeatherButton';
import Weatherbox from './components/Weatherbox';
const api_key = process.env.REACT_APP_API_KEY;
const cities = ['paris', 'new york', 'tokyo', 'seoul'];
function App() {
    //app기능
    //현재 위치 기반의 날씨가 보인다.
    //2.날씨 정보에는 도시 ,섭씨 화씨 날씨상태
    //5개의 버튼이 있다.(1개는 현재 위치 다른 도시)
    //현재위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.ok
    //데이터를들고 오는 동안 로딩 스핀어가 돈다.
    //useEffct에는 파라미터가 2개 들어간다.

    //アプリ機能
    //現在位置ベースの天気が見えます。
    //2.天気情報には都市、摂氏華氏状態状態
    //5つのボタンがあります。
    //現在の位置ボタンを現在の位置ベースの天気によって記録します。
    //データを保持している間、ロードが戻ります。
    //useEffctには2つのパラメータがあります。
    /////////////////////////////////////////
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [apiError, setAPIError] = useState('');

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon); // Fixed function name here
            console.log('현재위치', lat, lon);
        });
    };
    const getWeatherByCurrentLocation = async (lat, lon) => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setWeather(data);
            setLoading(false);
            console.log('app_data', setWeather);
        } catch (err) {
            console.log(err);
            setAPIError(err.message);
            setLoading(false);
        }
    };

    const getWeatherByCity = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
            setLoading(true);
            let res = await fetch(url);
            let data = await res.json();
            console.log(' getWeatherByCitydata', data);
            setWeather(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setAPIError(err.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        if (city == '') {
            setLoading(true);
            getCurrentLocation();
        } else {
            setLoading(true);
            getWeatherByCity();
        }
    }, [city]);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY;
        console.log('API Key:', apiKey);
    }, []);
    const handleCityChange = (city) => {
        if (city === 'current') {
            setCity(null);
        } else {
            setCity(city);
        }
    };

    return (
        <div className="App">
            {loading ? (
                <div className="container">
                    <ClipLoader
                        color="#f88c6b"
                        loading={loading}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            ) : !apiError ? (
                <div className="container">
                    <Weatherbox weather={weather} />

                    <WeatherButton
                        cities={cities}
                        setCity={setCity}
                        activeButton={city}
                        setActiveButton={handleCityChange}
                    />
                </div>
            ) : (
                apiError
            )}
        </div>
    );
}

export default App;
