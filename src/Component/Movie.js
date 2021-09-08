import React from 'react';
import { Card, Col,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Movie extends React.Component {
    render() {

        return (

            <> <Row xs={1} md={3} className="g-4">
                {
                    this.props.dataMovie.map((element, key) => (
                        <>

                           <Col>
                            <Card style={{ width: '18rem' }}>

                                <Card.Body>
                                    <Card.Title>Movies</Card.Title>
                                    <Card.Text>
                                        <p>Title    : {element.title}</p>
                                        <p>overview : {element.overview}</p>
                                        <p>
                                        vote_average:  {element.vote_average}
                                        </p>

                                        <p>
                                        vote_count  :  {element.vote_count}
                                        </p>

                                        <p>
                                        popularity :  {element.popularity}
                                        </p>

                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            </Col>
                        
                        </>

                    ))}</Row>


            </>

        );
    }

}

export default Movie;