import React from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import './App.css';

class Partnerships extends React.Component {
    render() {
        return (
            <div className='mainWrapper'>
                <Jumbotron fluid className ='titlebox'>
                        <h2 className='container text-center'>OUR PARTNERSHIPS, THEY MAKE A DIFFERENCE</h2>
                </Jumbotron>
                <Jumbotron fluid className ='mainbox'>
                <CardDeck className='d-flex flex-column'>
                <Card className = 'mx-auto topcard'>
                    <Card.Title className='text-center maintitle'>OUR PARTNERS</Card.Title>
                    <Card.Text className='text-center'>
                    <p>We are excited about our awesome industry partners who are as determined as us to bridge the tech skills and diversity gap in the industry</p>
                    </Card.Text>
                </Card>
                <Card className = 'mx-auto topcard'>
                    <Card.Title className='maintitle'>
                        <h4 className='maintitle'>NORM MCKENZIE</h4>
                        <h6>RELATIONSHIP MANAGER, THE SOUTHERN INITIATIVE AUCKLAND COUNCIL</h6>
                    </Card.Title>
                    <Card.Text>
                    <p className = 'font-italic'>​"An Auckland Council Organisation, The Southern Initiative (TSI) champions and enables social and community innovation in South Auckland. It covers the local board areas of Māngere – Ōtāhuhu, Ōtara – Papatoetoe, Manurewa and Papakura. TSI has identified Mission Ready HQ as a local change maker, and has established a supportive and collaborative partnership to produce positive social impact and community gains. Mission Ready HQ as an Auckland-focussed technology company, creates opportunities that lead to quality jobs and careers in the technology space. Working closely with Diana Sharma (Director-Mission Ready HQ) TSI enjoy the personal and committed approach to achieving improved outcomes for our whanau in the South Auckland region.We would encourage other organisations to work with Mission Ready HQ, and are pleased to recommend them for their professional and solutions-focused attitude in what they will achieve for us."</p>
                    <br/>
                    <p className = 'font-weight-bold'>Mauri Ora Norm</p>
                    </Card.Text>
                    <Card.Img className='logoimg' variant='bottom' src='/tsi_1.png' />
                </Card>
                <Card className = 'mx-auto topcard'>
                    <Card.Title className='maintitle'>
                        <h4 className='maintitle'>JOHN GUEST</h4>
                        <h6>SALES EXECUTIVE AND SOFTWARE AND SYSTEMS GENERAL MANAGER FOR NEW ZEALAND IBM</h6>
                    </Card.Title>
                    <Card.Text>
                    <p className = 'font-italic'>​"The world of work is being transformed by new technologies like artificial intelligence and blockchain – technologies which extend the impact of human labour and thinking. It’s difficult to predict what new jobs will emerge over the next 10 or 20 years. What we do know is that entirely new job categories will emerge and we need New Zealanders to be prepared to take full advantage of the opportunity ahead of us.</p>   
                    <p className = 'font-italic'>At IBM we believe in helping to prepare students not just for traditional blue collar or white collar jobs, but  “new collar” roles, which offer a new and promising route to meaningful employment in the era of AI. To do that, education models need to adapt to enable continuous learning. IBM creates and supports education initiatives from our pioneering P-TECH education model, to the introduction of microcredentials, and we endorse and support the creation of grassroots development projects like Mission Ready HQ. The members of the programme created by Alan Kan (Co-founder of Mission Ready HQ) I observed in action demonstrated the attributes and skills that will help them succeed in this changing work environment."</p>
                    </Card.Text>
                </Card>
                </CardDeck>
                </Jumbotron>
                <Jumbotron fluid className ='titlebox text-center'>
                    <Image className='logoimg' src = '/tsi_1.png' />
                    <Image className='logoimg' src = '/spark.png' />
                    <Image className='logoimg' src = '/fusion-logo.png' />
                    <Image className='logoimg' src = '/crunch-logo-v2-001.jpeg' />
                </Jumbotron>
            </div>
        );
    }
}

export default Partnerships