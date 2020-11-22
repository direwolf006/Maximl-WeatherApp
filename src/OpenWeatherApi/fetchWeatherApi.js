import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "689f294c5e1562a9f901ea23b9168932";

const fetchWeatherApi = async (query) => {
  const { data } = await axios
    .get(URL, {
      params: {
        q: query,
        units: "metric",
        APPID: API_KEY
      }
    })
    .catch((error) => {
      console.log(error);
      return error.response.status;
    });

  return data || 404;
};

export default fetchWeatherApi;
