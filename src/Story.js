import React from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import './App.css';

class Story extends React.Component {
    render() {
        return (
            <div className='mainWrapper'>
                <Jumbotron fluid className ='titlebox'>
                    <h2 className='container text-center'>THIS IS OUR WHY!</h2>
                </Jumbotron>
                <Jumbotron fluid className ='mainbox d-flex'>
                        <CardDeck className='d-flex flex-column'>
                            <Card className = 'topcard'>
                            <Card.Title className='text-center maintitle'>OUR VISION</Card.Title>
                            <Card.Text className='text-center'>
                                <p>Mission Ready HQ’s vision is to create a better world by developing and coaching talented, creative individuals and guiding them into exciting tech-enabled careers with organisations that care.</p>
                                <p className='font-weight-bold font-italic'>Better Skills, Better Lives, Better World</p>
                                <p>The MRHQ accelerator was launched by a passionate team with local and global project experience, industry network, talent development experience, and a keen eye on tech skills requirements. We were set up to bridge the growing skills shortage by challenging the way the next tech workforce is prepared. That’s why we created this model in collaboration with industry employers and leaders.</p>
                            </Card.Text>
                            </Card>
                            <Card className = 'topcard'>
                            <Card.Title className='text-center maintitle'>DESIGNED TO DELIVER ON OUR PROMISE</Card.Title>
                            <Card.Text className='text-center'>
                                <p>The accelerator is designed to deliver on our promise to employers to develop quality candidates that are in-demand. Our candidates stand out because we understand that currently employers hire people who understand their business environments, and have relevant work experience. That’s why our model is designed to equip you with the most sought after practices including Agile and Design Thinking practices, and project experience.</p>
                            </Card.Text>
                            </Card>
                        </CardDeck>
                        <Image src = '/visionimg.jpeg' fluid />
                </Jumbotron>
                <Jumbotron fluid className ='titlebox'>
                    <h2 className='container text-center'>FOUNDERS</h2>
                </Jumbotron>
                <Jumbotron fluid className ='mainbox'>
                    <CardDeck>
                            <Card className = 'maincard'>
                            <Card.Img variant='top' src='/diana.jpeg' />
                            <Card.Body className = 'd-flex flex-column'>
                                <Card.Title>
                                    <h3 className='maintitle'>DIANA SHARMA</h3>
                                    <h4>Co-Founder and Mission Director</h4>
                                </Card.Title>
                                <Card.Text>
                                    <p>Diana is a wanna be geek, loves how tech is evolving to make our lives better and is passionate about the future of work, developing the next workforce and intersection of tech... which is why she co-founded MRHQ.</p>
                                    <p>An experienced strategic operator, Diana has led the operationalisation of three startups including Launchspace and Unitec's joint venture with The Mind Lab by Unitec and Tech Futures Lab. She is a passionate advocate of making education and tech accessible and affordable and she sits on the board of the Ako Hiko Education Trust. </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            <Card className = 'maincard'>
                            <Card.Img variant='top' src='/alan.jpeg' />
                            <Card.Body className = 'd-flex flex-column'>                            
                                <Card.Title>
                                    <h3 className='maintitle'>ALAN KAN</h3>
                                    <h4>Co-Founder and Chief Technologist</h4>
                                </Card.Title>
                                <Card.Text>
                                    <p>Alan is a technologist with a passion for developing modern and engaging ways to develop talent for the new age workforce... which is why he co-founded MRHQ.</p>
                                    <p>An experienced tech-innovator, Alan brings a unique combination of skills as a technologist and an educator having led successful international careers at IBM while creating and delivering the high impact programmes at Unitec and at Launchspace.</p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                    </CardDeck>
                </Jumbotron>
            </div>
        );
    }
}

export default Story