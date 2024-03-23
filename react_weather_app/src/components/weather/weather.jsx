import { useEffect, useState } from "react";
import Search from "../search/search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = () => {
    fetchWeatherData(search);
  };

  const fetchWeatherData = async (param) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data) {
        setLoading(false);
        setWeatherData(data);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("London");
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <Search
        handleSearch={handleSearch}
        setSearch={setSearch}
        search={search}
      />
      {weatherData && (
        <div className="weather-data">
          <h1>
            {weatherData.name},<span> {weatherData.sys.country}</span>
          </h1>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <h2 className="weather-temperature"> {weatherData.main.temp}°C</h2>
          <h2 className="weather-description">
            {weatherData.weather[0].description.toUpperCase()}
          </h2>
          <div className="weather-info">
            <div>
              <h3>Humidity</h3>
              <p>{weatherData.main.humidity}%</p>
            </div>
            <div>
              <h3>Wind</h3>
              <p> {weatherData.wind.speed}m/s</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Weather;
