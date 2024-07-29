import './App.css';
import { useEffect, useState } from 'react';

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
            console.log('현재위치', lat, lon);
        });
        console.log('getCurrentLocation');
    };
    useEffect(() => {
        getCurrentLocation();
    }, []);
    return <div className="App">water</div>;
}

export default App;
