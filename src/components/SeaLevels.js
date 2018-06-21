import React from 'react';

import SeaLevelsChart from './SeaLevelsChart';

const API_KEY = 'ea4ba74cdb0557380c5eaa5a58d6464b';

class SeaLevels extends React.Component {
    state = {
        seaLevelsArray: undefined,
        days: undefined,
    }
    componentDidMount() {
        this.getSeaLevels()
    }
    getDay(timestamp) {
        const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
        const date = new Date(timestamp * 1000);
        return days[date.getDay()]
    }
    setValues(data) {
        const seaLevelsArray = []
        const days = []
        data.list.forEach(seaLevel => {
            if (seaLevel.dt_txt.includes('09:00:00')) {
                seaLevelsArray.push(seaLevel.main.sea_level)
                days.push(this.getDay(seaLevel.dt))
            }
        })
        this.setState({
            seaLevelsArray,
            days
        })
    }
    getSeaLevels = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city},${this.props.country}&appid=${API_KEY}`)
        const data = await api_call.json();
        this.setValues(data);
    }
    render() {
        return (
            <div className='city__content'>
                
                { this.state.seaLevelsArray ? 
                    <SeaLevelsChart 
                        seaLevels={this.state.seaLevelsArray} 
                        days={this.state.days}
                    /> 
                :   
                    <p>loading</p> 
                }
            </div>

        );
    };
};

export default SeaLevels