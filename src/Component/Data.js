
import axios from "axios";

//Operation on Current Date
export const today = () => {
    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return {
        month: date.getMonth() + 1,
        day: days[date.getDay()],
        det: date.getDate(),
        year: date.getFullYear()
    }

}

//Get Weather From Api 
export const getWeather = async (city) => {
    try {
        const API_Key = "ae5e56ce6cf8430889782504262801";
        const res = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${city}`
        );
        return res.data
    } catch (error) {
        console.log(error)
    }
}

