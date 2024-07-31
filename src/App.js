import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import WeatherButton from './components/WeatherButton';
import Weatherbox from './components/Weatherbox';
const api_key = process.env.REACT_APP_API_KEY;
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
    let [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const cities = ['paris', 'new york', 'tokyo', 'seoul'];
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon); // Fixed function name here
            console.log('현재위치', lat, lon);
        });
    };
    const getWeatherByCurrentLocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
        setLoading(false);
        console.log('app_data', setWeather);
    };
    const getWeatherByCity = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
        setLoading(true);
        let res = await fetch(url);
        let data = await res.json();
        console.log(' getWeatherByCitydata', data);
        setWeather(data);
        setLoading(false);
    };
    useEffect(() => {
        if (city == '') {
            getCurrentLocation();
        } else {
            getWeatherByCity();
        }
    }, [city]);
    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY;
        console.log('API Key:', apiKey);
    }, []);

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
            ) : (
                <div className="container">
                    <Weatherbox weather={weather} />
                    <WeatherButton className="WeatherButton_contanin" cities={cities} setCity={setCity} />
                </div>
            )}
        </div>
    );
}

export default App;
