
import { useEffect, useState } from "react"
import "./Navbar.css"
import { Sun, Search, Moon } from "lucide-react"
import { getWeather } from "../Data"
const Navbar = ({ setMood, mood, setCurrentWeather, setCityDetail, setTemp, temp, setError }) => {
    const [city, setCity] = useState("");


    //get Data Weather Data 
    const fetchWeather = async () => {
        try {
            if (!city) return
            const data = await getWeather(city);
            setCityDetail(data.location)
            setCurrentWeather(data.current)
            setCity("")
            console.log(data)

        } catch (error) {
            setError("Something Wrong Try Again")
        }
    };


    //Set Default City Data
    useEffect(() => {
        try {
            const fetchWeather = async () => {
                const data = await getWeather("dewas");
                setCityDetail(data.location)
                setCurrentWeather(data.current)
                console.log(data)
            };
            fetchWeather()

        } catch (error) {
            setError("Something Wrong Try Again")
        }

    }, [])

    // operation On Mood
    const handleMood = () => {
        setMood((prev) => !prev)
    }

    // operation On Tempuratur
    const handleTempretur = () => {
        setTemp((prev) => !prev)

    }

    return (
        <>
            <div className="navbar-main-box">
                <div className="navbar-field-box">

                    {/* heading section */}
                    <section className="navbar-heading-section">
                        <Sun color="#eca409" size="40px" strokeWidth="3px" />
                        <h1 style={{ color: "black" }}>WeatherApp</h1>
                    </section>

                    {/* Input Search section */}
                    <section className="navbar-input-section">
                        <div className="navbar-search-bg">
                            <Search size={20} color="#141414" strokeWidth={1.75} onClick={fetchWeather} />
                        </div>
                        <input type="text" placeholder="Search For City" value={city} onChange={(e) =>{ setCity(e.target.value); setError("")}} onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                fetchWeather();
                            }
                        }} />
                    </section>

                    {/* Moon section */}
                    <section className="navbar-moon-bg">
                        {
                            mood ? <Sun size={30} color="#0f0f0f" strokeWidth={1.5} onClick={handleMood} />
                                : <Moon size={30} color="#0f0f0f" strokeWidth={1.5} onClick={handleMood} />
                        }
                    </section>

                    {/* Tempuratur Mood section */}
                    <section className="navbar-moon-bg" onClick={handleTempretur}>
                        {
                            temp ? "F°" : "°c"
                        }

                    </section>

                </div>
            </div>

        </>
    )
}

export default Navbar