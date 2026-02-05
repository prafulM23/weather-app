import { useEffect, useState } from "react";
import "./heroSection.css"
import CloudIcon from '@mui/icons-material/Cloud';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import { today } from "../Data.js"
const HeroSection = ({ currentWeather, cityDetail, temp, error }) => {


    return (
        <>
            {
                error ? <section >
                    <Alert severity="error">City Not Found.</Alert>

                </section> : ""

            }

            <div className="hero-main-container">

                {
                    cityDetail ? <>
                        <section className="city-date-box">
                            <p>{cityDetail?.name},<span>{cityDetail?.region}</span></p>
                            <span>{today().day},{cityDetail?.localtime}</span>
                        </section>

                        <section className="cloud-temp-box" >
                            <CloudIcon sx={{ fontSize: 150, color: "orange" }} className="icon-bounce" />
                            <div>
                                <h1>
                                    {
                                        temp ? `${currentWeather?.temp_c}°c` : `${currentWeather?.temp_f}°F`
                                    }

                                </h1>
                                <p>Weather Forcast all days</p>
                            </div>
                        </section>


                        <section className="infor-box">
                            <div className=" info">
                                <p>Wind/KPH</p>
                                <span>{currentWeather?.wind_kph}</span>

                            </div>
                            <div className=" info">
                                <p>Humadity</p>
                                <span>{currentWeather?.humidity}</span>

                            </div>
                        </section>
                    </>
                        :

                        <CircularProgress sx={{ color: "orange", margin: "auto" }} size={150} />

                }



            </div>


        </>
    )
}

export default HeroSection