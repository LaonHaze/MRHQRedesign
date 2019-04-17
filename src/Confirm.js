import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './App.css';

class Confirm extends React.Component {
    render() {
        return (
            <div className='mainWrapper'>
                <Jumbotron fluid className ='titlebox'>
                    <h2 className='container text-center'>WE RECEIVED YOUR INFORMATION!</h2>
                </Jumbotron>
                <Jumbotron fluid className ='mainbox'>
                <h4>We will be in touch soon. We look forward to meeting you.</h4>
                </Jumbotron>
            </div>
        );
    }
}

export default Confirm