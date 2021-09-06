import React from 'react';

class Weather extends React.Component{
    render()
    {
        return(
            <>
         {this.props.flageWeather &&
         this.props.data.map((item)=>(
             <>
             <p>des:{item.description}</p>
             <p>data:{item.data}</p>
             <p>Temp:{item.max_temp}</p>
             </>
         ))}


            </>
        )
    }
}
export default Weather;