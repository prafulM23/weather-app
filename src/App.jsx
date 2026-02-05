
import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import HeroSection from './Component/HeroSection/heroSection'
import Snowfall from "react-snowfall"

function App() {
  const [mood, setMood] = useState(false)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [cityDetail, setCityDetail] = useState(null)
  const [temp, setTemp] = useState(false)
  const [error, setError] = useState(null)
  console.log(temp)

  return (
    <>
      <div className="weather-container" style={{
        background: mood ? "linear-gradient(135deg, #0e1523, #1e3754)" : "linear-gradient(160deg, #3fa6f0, #f1c54abd)",
        color: mood ? "whitesmoke" : "black"
      }}>
        <Snowfall color={mood ? "#82C3D9" : "yellow"} />
        <Navbar setMood={setMood} mood={mood} setCurrentWeather={setCurrentWeather} setCityDetail={setCityDetail} temp={temp} setTemp={setTemp} setError={setError} />
        <HeroSection currentWeather={currentWeather} cityDetail={cityDetail} temp={temp} error={error} />
      </div>

    </>
  )
}

export default App
