import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './App.css';

class Programmes extends React.Component {
    render() {
        return (
            <div className='mainWrapper'>
            <Jumbotron fluid className ='titlebox'>
                    <h2 className='container text-center'>OUR PROGRAMMES = YOUR SUCCESS</h2>
            </Jumbotron>
            <Jumbotron fluid className ='mainbox'>
                <Card className = 'mx-auto topcard'>
                    <Card.Title className='text-center maintitle'>TECH ACCELERATOR PATHWAYS</Card.Title>
                    <Card.Text className='text-center'>
                    <p>MRHQ's flagship programme designed for entry level candidates who want to start a tech career in 14 weeks. Candidates learn by solving real projects with real clients</p>
                    </Card.Text>
                </Card>
                <CardDeck>
                <Card className = 'maincard'>
                    <Card.Img variant='top' src='/techimg.jpeg' />
                    <Card.Body className = 'd-flex flex-column'>
                    <Card.Title className='text-center'>AGILE SOFTWARE DEVELOPER &amp; TESTER PATH</Card.Title>
                    <Card.Text className='text-center'>
                        <br/><br/>
                    </Card.Text>
                    <div class='text-center mt-auto'>
                        <Button variant='light' href='./programmes'>FIND OUT MORE</Button>
                    </div>
                    </Card.Body>
                </Card>
                <Card className = 'maincard'>
                    <Card.Img variant='top' src='/creativeimg.jpeg' />
                    <Card.Body className = 'd-flex flex-column'>
                    <Card.Title className='text-center'>AGILE CUSTOMER EXPERIENCE DESIGNER PATH</Card.Title>
                    <Card.Text className='text-center'>
                        <br/><br/>
                    </Card.Text>
                    <div class='text-center mt-auto'>
                        <Button variant='light' href='./programmes'>FIND OUT MORE</Button>
                    </div>
                    </Card.Body>
                </Card>
                <Card className = 'maincard'>
                    <Card.Img variant='top' src='/businessimg.jpeg' />
                    <Card.Body className = 'd-flex flex-column'>
                    <Card.Title className='text-center'>AGILE PROJECTS &amp; BUSINESS ANALYST PATH</Card.Title>
                    <Card.Text className='text-center'>
                        <br/><br/>
                    </Card.Text>
                    <div class='text-center mt-auto'>
                        <Button variant='light' href='./programmes'>FIND OUT MORE</Button>
                    </div>
                </Card.Body>
                </Card>
                </CardDeck>
            </Jumbotron>
        </div>
        );
    }
}

export default Programmes