import React from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './App.css';

class Experience extends React.Component {
    render() {
        return (
            <div className='mainWrapper'>
                <Jumbotron fluid className ='titlebox'>
                    <h2 className='container text-center'>OUR GRADUATES</h2>
                </Jumbotron>
                <Jumbotron fluid className ='mainbox'>
                        <Card className = 'mx-auto topcard'>
                            <Card.Title className='text-center maintitle'>Our students are who makes us</Card.Title>
                            <Card.Text className='text-center'>
                            <p>Have a read of our students' experiences with Mission Ready HQ</p>
                            </Card.Text>
                        </Card>
                    <CardDeck>
                            <Card className = 'maincard'>
                            <Card.Img variant='top' src='/student1.jpeg' />
                            <Card.Body className = 'd-flex flex-column'>
                                <Card.Title>
                                    <h5 className='maintitle'>MURILO FOLGOSI</h5>
                                    <h6>Business Pathway, March 2020</h6>
                                </Card.Title>
                                <Card.Text>
                                    <p>Some Meaningful Story</p>
                                    <p>Why MRHQ is Great</p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <Card className = 'maincard'>
                            <Card.Img variant='top' src='/student2.jpeg' />
                            <Card.Body className = 'd-flex flex-column'>                            
                                <Card.Title>
                                    <h5 className='maintitle'>JOHN SMITH</h5>
                                    <h6>Technical Pathway, June 2020</h6>
                                </Card.Title>
                                <Card.Text>
                                    <p>Some Meaningful Story</p>
                                    <p>Why MRHQ is Great</p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <Card className = 'maincard'>
                            <Card.Img variant='top' src='/student3.jpeg' />
                            <Card.Body className = 'd-flex flex-column'>                            
                                <Card.Title>
                                    <h5 className='maintitle'>ANASTASIYA GEPP</h5>
                                    <h6>Creative Pathway, November 2021</h6>
                                </Card.Title>
                                <Card.Text>
                                    <p>Some Meaningful Story</p>
                                    <p>Why MRHQ is Great</p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                    </CardDeck>
                </Jumbotron>
            </div>
        );
    }
}

export default Experience