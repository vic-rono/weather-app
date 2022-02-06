
import React from 'react'
import Axios from 'axios'
import Weather from './components/Weather'
import Navbar from './components/Navbar.js'





class App extends React.Component {

  state = {
    coords:{
      latitude: 2,
      longitude: -1
    },
    data: {},
    inputData: ""
  }
  
  componentDidMount(){
  navigator.geolocation.getCurrentPosition((position)=>{
  let newCoords = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  }
  
  this.setState({ coords:newCoords })

  Axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_KEY}&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res =>{
    let weatherData = {
      location: res.data.location.name,
      temperature: res.data.current.temperature,
      description: res.data.current.weather_descriptions[0],
      region: res.data.location.region,
      country: res.data.location.country,
      wind_speed: res.data.current.wind_speed,
      pressure: res.data.current.pressure,
      precip: res.data.current.precip,
      humidity: res.data.current.humidity,
    }
     
    return this.setState({data:weatherData})

  }).catch((err) => {
    console.log(err)
  })
})
}

change = (value) => {
  this.setState({inputData: value})
}

changeWeather = (e) =>{
    e.preventDefault();

    Axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_KEY}&query=${this.state.inputData}`).then(res=>{
     let weatherData = { 
      location: res.data.location.name,
      temperature: res.data.current.temperature,
      description: res.data.current.weather_descriptions[0],
      region: res.data.location.region,
      country: res.data.location.country,
      wind_speed: res.data.current.wind_speed,
      pressure: res.data.current.pressure,
      precip: res.data.current.precip,
      humidity: res.data.current.humidity,
  
     }
     
     return this.setState({data: weatherData})
    }).catch((err) => {
      console.log(err)
    })
  }

render(){
  return (
    <div className="App">
      <div className="container">
        <Navbar changeWeather={this.changeWeather} changeRegion={this.change} />
      <Weather weatherData={this.state.data} />
    </div>
  </div>
  );
  }
}

export default App;


