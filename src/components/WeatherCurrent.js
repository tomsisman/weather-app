import React from 'react';

const API_KEY = 'ea4ba74cdb0557380c5eaa5a58d6464b';

class WeatherCurrent extends React.Component {
    state = {
        city: undefined,
        country: undefined,
        icon: undefined,
        description: undefined,
        temperature: undefined,
        humidity: undefined,
        wind: undefined,
        sunset: undefined,
        sunrise: undefined
    }
    componentDidMount() {
        this.getWeather()
    }
    getTime(unixTime) {
        const hours = new Date(unixTime * 1000).getHours()
        const mins = new Date(unixTime * 1000).getMinutes()
        return `${hours}:${mins}${hours <= 12 ? "am" : "pm"}`
    }
    setValues(data) {
        const sunrise = this.getTime(data.sys.sunrise);
        const sunset = this.getTime(data.sys.sunset);
        this.setState({
            city: data.name,
            country: data.sys.country,
            icon: data.weather[0].icon,
            description: data.weather[0].description,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            sunrise,
            sunset
        })
    }
    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.city},${this.props.country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        this.setValues(data)
    }
    render() {
        const iconLink = `http://openweathermap.org/img/w/${this.state.icon}.png`;
        return (
            <div className='city__content weather-current'>
                <img src={iconLink} alt="weather icon" />
                <p className='city__content__subtitle'>{this.state.description}</p>         
                <p>{this.state.temperature}°C</p>
                <p>Humidity: {this.state.humidity}%</p>
                <p>Wind: {this.state.wind}mph</p>
                <p>Sunrise: {this.state.sunrise}</p>
                <p>Sunset: {this.state.sunset}</p>
            </div>
        );
    };
};

export default WeatherCurrent;
