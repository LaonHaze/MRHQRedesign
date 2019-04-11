import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Navbar, Nav, Button, ButtonToolbar} from 'react-bootstrap';
import './index.css';
import App from './App';
import Programmes from './Programmes';
import Story from './Story';
import NotFound from './NotFound';
import Experience from './Experience';
import Funding from './Funding';
import Partnerships from './Partnerships';
import ApplicationForm from './ApplicationForm';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Navbar bg = 'dark' expand = 'lg' fixed = 'top' className='justify-content-between'>
                <Navbar.Brand href= '/'>
                        <img
                            src = '/mrhqlogo.png'
                            height = '30'
                            className = 'd-inline-block align top'
                            alt = 'MRHQ Logo'
                        />
                    </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href='/story'>Our Story</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/programmes'>Our Programmes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/experience'>Past Student Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/funding'>Funding &amp; Scholarship</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/partnerships'>Partnerships</Nav.Link>
                    </Nav.Item>
                </Nav>
                <ButtonToolbar>
                    <Button variant='outline-light' href='/applicationform'>Apply</Button>
                    <Button variant='outline-light'>Contact Us</Button>
                </ButtonToolbar>
                
            </Navbar>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/programmes' component={Programmes} />
                <Route path='/story' component={Story} />
                <Route path='/experience' component={Experience} />
                <Route path='/funding' component={Funding} />
                <Route path='/partnerships' component={Partnerships} />
                <Route path='/applicationform' component={ApplicationForm} />
                <Route component={NotFound} />
            </Switch>            
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
