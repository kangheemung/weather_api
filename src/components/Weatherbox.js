import React from 'react';

function Weatherbox() {
    return (
        <div>
            <div>
                <section>
                    <div id="output"></div>
                    <div class="weather_box">
                        <span class="nowtime"></span>
                        <div class="weather_top">
                            <div class="weather_info">
                                오늘의 날씨
                                <div>
                                    <h3 id="SeoulNowtemp" class="SeoulNowtemp"></h3>
                                </div>
                                <div>
                                    <h3 id="wether_city" class="wether_city"></h3>
                                </div>
                            </div>
                            <div class="weather_info_img">
                                <div>
                                    <h3 id="weather_img" class="weather_img"></h3>
                                </div>
                            </div>
                        </div>
                        <div class="side_curent_weather">
                            <h3 id="SeoulLowtemp" class="SeoulLowtemp"></h3>
                            <h3 id="SeoulHightemp" class="SeoulHightemp"></h3>
                            <h3 id="humidity" class="humidity"></h3>
                            <h3 id="weather_wind" class="weather_wind"></h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Weatherbox;
