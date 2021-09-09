import React from 'react';
import { Card, Col,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Movie extends React.Component {
    render() {
        

        return (

            <div> 
            <Row xs={1} md={3} className="g-4">
                {
                    this.props.dataMovie.map((element, key) => (
                        <div key={key}>
                        

                           <Col>
                            <Card style={{ width: '18rem' }} >

                                <Card.Body>
                                    <Card.Title>Title: {element.title}</Card.Title>
                                    <Card.Text>
                                       overview : {element.overview}</Card.Text>
                                      
                                       <Card.Text>
                                        vote_average:  {element.vote_average}
                                        </Card.Text>

                                        <Card.Text>
                                        vote_count  :  {element.vote_count}
                                        </Card.Text>

                                        <Card.Text>
                                        popularity :  {element.popularity}                                       
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            </Col>
                        
                      
                        </div>

                    ))}
                    </Row>


            </div>

        );
    }

}

export default Movie;