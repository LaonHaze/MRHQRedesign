import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <div className='jumbotron jumbotron-fluid' style = {styles.container}>
          <div className='push-to-middle'>
            <h1 className='container text-right'>Launch Your Tech Career in 14 Weeks</h1>
            <h4 className='container text-right'>Train and up-skill in real work environments with real clients and projects</h4>
            <div className='container text-right'>
              <Button variant = 'light' href='./applicationform'>APPLY NOW</Button>
              <Button variant = 'light' href='./programmes'>FIND OUT MORE</Button>
            </div>
          </div>
        </div>
        <Jumbotron fluid className ='mainboxalt'>
          <h2 className='container text-center'>Our mission is to get people into exciting tech-enabled careers</h2>
          <p className='container text-center'>We do this through accelerated development and coaching in partnership with employers, to enable our candidates to gain the skills, experience and exposure they need to get into the tech industry quickly.</p>
        </Jumbotron>
        <Jumbotron fluid className ='mainbox'>
          <Card className = 'mx-auto topcard'>
            <Card.Title className='text-center maintitle'>Our Programmes</Card.Title>
            <Card.Text className='text-center'>
              <p>Achieve your career goals with industry designed, delivered and recognised development programmes</p>
            </Card.Text>
          </Card>
          <CardDeck>
          <Card className = 'maincard'>
            <Card.Img variant='top' src='/techimg.jpeg' />
            <Card.Body className = 'd-flex flex-column'>
              <Card.Title className='text-center'>AGILE SOFTWARE DEVELOPER &amp; TESTER PATH</Card.Title>
              <Card.Text>
                <h6>Careers:</h6>
                <ul>
                  <li>Software Developer</li>
                  <li>Web Developer</li>
                  <li>Backend Developer</li>
                  <li>Test Analyst</li>
                  <li>More</li>
                </ul>
                <p>This is for anyone interested in solving real business and community problems using technology and technical skills. If you are a hands-on creator and enjoy making, testing and seeing your creation come to life, then this pathway is for you.</p>
              </Card.Text>
              <div class='text-center mt-auto'>
                <Button variant='light' href='./applicationform'>APPLY NOW</Button>
                <Button variant='light' href='./programmes'>FIND OUT MORE</Button>
              </div>
            </Card.Body>
          </Card>
          <Card className = 'maincard'>
            <Card.Img variant='top' src='/creativeimg.jpeg' />
            <Card.Body className = 'd-flex flex-column'>
              <Card.Title className='text-center'>AGILE CUSTOMER EXPERIENCE DESIGNER PATH</Card.Title>
              <Card.Text>
              <h6>Careers:</h6>
                <ul>
                  <li>Customer Experience Designer</li>
                  <li>Human Centered Design</li>
                  <li>Consultant</li>
                  <li>Product Designer</li>
                </ul>
                <p>This is for anyone interested in using creativity to challenge and improve customer experiences to deliver better solutions. If you enjoy creating new experiences through customer empathy, design, tech and creativity, then this pathway is for you. </p>
              </Card.Text>
              <div class='text-center mt-auto'>
                <Button variant='light' href='./applicationform'>APPLY NOW</Button>
                <Button variant='light' href='./programmes'>FIND OUT MORE</Button>
              </div>
            </Card.Body>
          </Card>
          <Card className = 'maincard'>
            <Card.Img variant='top' src='/businessimg.jpeg' />
            <Card.Body className = 'd-flex flex-column'>
              <Card.Title className='text-center'>AGILE PROJECTS &amp; BUSINESS ANALYST PATH</Card.Title>
              <Card.Text>
              <h6>Careers:</h6>
                <ul>
                  <li>Business Analyst</li>
                  <li>Scrum Product Owner</li>
                  <li>Project Coordinator</li>
                  <li>Sales Consultant</li>
                </ul>
                <p>This is for anyone interested in being the bridge between people and technology. If you are a customer-focused problem solver who enjoys using data and analytical skills to improve business performance, then this pathway is for you.</p>
              </Card.Text>
              <div class='text-center mt-auto'>
                <Button variant='light' href='./applicationform'>APPLY NOW</Button>
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

const imgurl = '/mainimg.jpg'

const styles = {
  container: {
    backgroundImage: `url(${imgurl})`,
    backgroundSize: `cover`,
    height: `90vh`
  }
};


export default App;
