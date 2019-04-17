import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';

class ApplicationForm extends React.Component {
    render() {
        return (
            <div className='mainWrapper'>
                <Jumbotron fluid className ='titlebox'>
                    <h2 className='container text-center'>YOUR JOURNEY STARTS HERE</h2>
                </Jumbotron>
                <Jumbotron fluid className ='mainbox'>
                <h3>Register Your Interest</h3>
                <h4>Apply here and we'll contact you to discuss your placement and funding. We look forward to meeting you.</h4>
                <br/>
                <Form className='formpage'>
                    <Form.Group controlId='fullname'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type='text' placeholder='Full Name' />
                    </Form.Group>
                    <Form.Group controlId='phonenumber'>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type='text' placeholder='Phone' />
                    </Form.Group>
                    <Form.Group controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='Email@Something.com' />
                    </Form.Group>
                    <Form.Group controlId='pathway'>
                        <Form.Label>Select Your Pathway</Form.Label>
                        <Form.Control as='select'>
                            <option>Technical Pathway</option>
                            <option>Business Pathway</option>
                            <option>Creative Pathway</option>
                            <option>I'm Not Sure Yet</option>
                        </Form.Control>
                    </Form.Group>
                    <br />
                    <Form.Check type = 'checkbox' id = 'funding' label = 'I am interested in scholarship/funding options'/>

                    <br/>
                    <Button variant = 'light' href = '/confirm'>Let's Go</Button>
                </Form>

                
                </Jumbotron>
            </div>
        );
    }
}

export default ApplicationForm