import React, { Component } from 'react';

 import '../CSS/Detailsindexjs.css';
import { CardDeck,Card} from 'react-bootstrap';

import img1 from '../img/tabimg/003.png';
import img2 from '../img/tabimg/001.png';
import img3 from '../img/tabimg/002.png';
import img4 from '../img/tabimg/005.png';
import img5 from '../img/tabimg/004.png';

export default class Detailsindexjs extends Component {
    //cards on the home page
    render() {
        return (
            <div className="DI" >
                <br/>
                    <br/>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Easy Payment Methods</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Secure Reservation</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Fast and Reliable</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img4}/>
                        <Card.Body>
                            <Card.Title>User Friendly</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>Mobile Payments</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br/>
                <br/>
            </div>
        );



    }



}

