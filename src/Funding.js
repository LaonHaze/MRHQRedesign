import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './App.css';

class Funding extends React.Component {
    render() {
        return (
            <div className='mainWrapper'>
                <Jumbotron fluid className ='titlebox'>
                        <h2 className='container text-center'>FUNDING &amp; SCHOLARSHIPS</h2>
                </Jumbotron>
                <Jumbotron fluid className ='mainbox'>
                        <br/>

                        <p className = 'text-center centerboxy'>Mission Ready HQ is on a mission to reduce social inequity by empowering those from disadvantaged communities to pursue sustianable tech-enabled careers.</p>
                        <br/>
                        <h4 className = 'text-center blacktitle'>Apply for a Grant</h4>
                        <br/>
                        <br/>
                        <CardDeck>
                            <Card className = 'maincard'>
                            <Card.Body className = 'd-flex flex-column'>
                                <Card.Title>
                                    <h3 className='text-center maintitle'>ASPIRE SCHOLARSHIP</h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>Aspire Scholarships are open to candidates from low-income households. This covers 50% to 100% of the full programme fees.  And is also available to those recently made redundant and those who have been out of the workforce due to unforeseen circumstances.</p>
                                </Card.Text>
                                <div class='text-center mt-auto'>
                                    <Button variant='light' href='./applicationform'>APPLY</Button>               
                                </div>
                            </Card.Body>
                            </Card>
                            <Card className = 'maincard'>
                            <Card.Body className = 'd-flex flex-column'>                            
                                <Card.Title>
                                    <h3 className='text-center maintitle'>YOUTH SCHOLARSHIP</h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>Youth Scholarships are open for the March 2019 intake to candidates aged between 18 to 24. This grant covers 50% to 100% of the full programme fees. Maori, Pacifika and women candidates are encouraged to apply for these grants as there is an increasing demand for diverse skill-sets..</p>
                                </Card.Text>
                                <div class='text-center mt-auto'>
                                    <Button variant='light' href='./applicationform'>APPLY</Button>               
                                </div>
                            </Card.Body>
                            </Card>
                    </CardDeck>
                    <br/>
                    <br/>
                    <Card className = 'mx-auto topcard'>
                        <Card.Title className='text-center maintitle blacktitle'>PAY IT FORWARD</Card.Title>
                        <Card.Body className = 'd-flex flex-column'>  
                            <Card.Text className='text-center'>
                                <p>We want to scale the model and enable more people to achieve more.  All scholarship candidates sign up to our Pay-it-Forward scheme, where they join the programme fees-free, and once they are successfully employed, they pay towards another candidate's fees helping us scale impact and making a difference to one more life.</p>
                                <p>Why wait? Start your journey towards success today:</p>
                            </Card.Text>
                            <div class='text-center mt-auto'>
                                    <Button variant='light' href='./applicationform'>APPLY</Button>               
                                </div>
                        </Card.Body>
                    </Card>
                </Jumbotron>
            </div>
        );
    }
}

export default Funding