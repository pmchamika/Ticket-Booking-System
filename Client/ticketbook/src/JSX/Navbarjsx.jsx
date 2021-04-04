import React, { Component } from 'react';
import icon from '../img/logo/logo.jpg';
import { Button,Navbar,Nav ,Form,FormControl,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Navbarjsx extends Component {

    //rendering the navigation bar of the home page
    render() {
        return (
            <div className="Na" >
                <Navbar bg="light" variant="light"  fixed="top">
                    <Navbar.Brand href="#home">
                        <img
                            width={150}
                            height={64}
                            className="d-inline-block align-top"
                            src={icon}
                            alt="Logo ICON"/>

                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to="/">   <Nav.Link href="#home">Home</Nav.Link></Link>

                    </Nav>
                    <Form inline>

                         <Link to="/App">  <Button variant="outline-primary">Book Ticket</Button></Link>
                    </Form>
                </Navbar>
            </div>
        );
    }


}


