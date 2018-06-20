import React from 'react';
import { Line } from 'react-chartjs-2';

class SeaLevelsChart extends React.Component {
    state = {
        chartData: {
            labels: this.props.days,
            datasets: [
                {
                    label: 'Sea levels',
                    data: this.props.seaLevels,
                    backgroundColor: 'rgba(51,51,51,0.5)'
                }
            ]
        }
    }
    render() {
        return (
                <div className='chart'>
                    <Line
                        data={this.state.chartData}
                        width={100}
                        height={75}
                        options={{
                            title: {
                                display: true,
                                text: 'Sea Levels at 09:00am in inches',
                            },
                            legend: {
                                display: false,
                            }
                        }}
                    />
                </div> 
        )
    }
}

export default SeaLevelsChart
