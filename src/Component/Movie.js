import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            
          <>
          {this.props.movieFlage&&this.props.data.map(item=>{
             <>
             <p> {item.title} </p>
              <p>{item.overview}</p> 
              <p>
                  {  item.vote_average}
              </p>
            
              <p>
                  {item.vote_count}
              </p>
            
            <p>
                  { item.popularity}
              </p>
          
           <p>
                  {item.release  }
              </p>
              
    
            
             </>

          })}
        
          </>
       
        )
         }        
   
}

export default Movie;