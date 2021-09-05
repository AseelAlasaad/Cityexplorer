import axios from 'axios';
import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { Form, Button } from 'react-bootstrap'
import './App.css';
class App extends React.Component {

  constructor(props)
  {
    super(props)
    this.state={
      lat:'',
      lon:'',
      displayname:'',
      flag:false,
      flagErr:false
    }

  }

  getLocation=async (event)=>{
    event.preventDefault();
    const cityName=event.target.location.value;
    console.log(cityName);
    // process.env.REACT_APP.LOCATION;
    // const aseelKey='pk.69bdef83e3eb40b7dc8a82c63b9e581e';
    const URL= `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONS}&q=${cityName}&zoom=18&format=json`;

     console.log(URL); 
     try {
      let finalResult=await axios.get(URL);
      console.log(finalResult);
      this.setState({
       lat:finalResult.data[0].lat,
        lon:finalResult.data[0].lon,
        displayname:finalResult.data[0].display_name,
        flag:true
      })
       
     } catch (error) {
       console.log('error');
       this.setState({
         flagErr:true
       })
     }
  
 
  }


  render(){ 
    return(

     <>
      <Header/>
      <h1>What would you like to Explore?</h1>
      <Form onSubmit={this.getLocation}> 
  <Form.Group className="mb-3" controlId="location">
    <Form.Control type="text" namr="location"placeholder="Enter location " />
  
  </Form.Group>

  <Button variant="primary" type="submit">
   Explore!
  </Button>
</Form>

      {/* get data */}

      {this.state.flag&&<p>Welcome to  {this.state.displayname} </p>}
      {this.state.flag&&<p>{this.state.displayname} is located at {this.state.lat} by {this.state.lon}</p>}
      

      {this.state.flag&& <img 
      src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONS}&center=${this.state.lat},${this.state.lon}&zoom=[1 to 18]`} 
      alt='displaymap'></img>};

   

    <Footer/>

     </>
    
  )
  }

}

export default App;
