import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CurrentWeather from './components/current_weather';
import SearchBar from './components/searchbar';
import WeeklyWeather from './components/weekly_weather';

const App = () => {

  const API_KEY = "ddd894a203ff67aabbb31a2dfe631a66";
 

  useEffect (() =>{
    getWeather()

    getForecast()
  }, [])
  

  const [currentWeather, updateCurrentWeather] = useState ();
  const [zipCode, getZipCode] = useState(90806);
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState ('')
  const [loading, setLoading] = useState (true)
  const [forecast, setForecast] = useState([]);
  const regex = /15:00:00/g

  const setZipCode = (zip)=>{
    getZipCode(zip)
  }

  const getAreaCode = (event) => {
    getZipCode(event.target.value)
  }

// make area code into parameter to pass into the http request
  const getWeather = async () => {
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${API_KEY}&units=imperial`)
    updateCurrentWeather(res.data.main.temp)
    setDescription(res.data.weather[0].description)
    setIcon(res.data.weather[0].icon)
  }

  const getForecast = async () => {
    const result = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=${API_KEY}&units=imperial`)
    console.log(result)
    setForecast(result.data)
    console.log (forecast)
    
  }

  return (
    <React.Fragment>
    <div>{currentWeather}</div>
    <div>{description}</div>
    <img  src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
    <SearchBar areaCode={zipCode} getAreaCode={getAreaCode} searchAreaCode={getWeather} />
    </React.Fragment>
    
  )
}



export default App;



