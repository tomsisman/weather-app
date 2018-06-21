import React from 'react';

import WeatherCurrent from './WeatherCurrent';
import SeaLevels from './SeaLevels';

class City extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleSeaLevels = this.handleToggleSeaLevels.bind(this);
    }
    state = {
        showSeaLevels: false,
        flip: undefined
    }
    handleToggleSeaLevels() {
        this.setState({
            showSeaLevels: !this.state.showSeaLevels,
            flip: !this.state.flip
        })
    }
    render() {
        return (
            <div className='city__outer-div col-md-4'>
                <div 
                    className=
                        { this.state.flip ? 'city city--flip' : 'city city--flip-reverse' } 
                    onClick={this.handleToggleSeaLevels }
                >
                    <h2 className='city__title'>{this.props.city}</h2>

                    { !this.state.showSeaLevels &&  <WeatherCurrent city={this.props.city} country={this.props.city} /> }

                    { this.state.showSeaLevels && <SeaLevels city={this.props.city} country={this.props.city} /> }
                    
                </div>
            </div>
        );
    }
}

export default City;