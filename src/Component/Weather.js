import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.flageWeather &&
                    this.props.data.map((item, idx) => (
                        <div key={idx}>
                            <h3> Day: {idx+1}</h3>
             <p >{item.description}</p>
             <p>{item.date}</p>


    
                        </div>
                    ))}


            </div>
        )
    }
}
export default Weather;