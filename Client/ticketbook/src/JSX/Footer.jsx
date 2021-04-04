import React, { Component } from 'react';


import { Card} from 'react-bootstrap';

export default class Footer extends Component {

    //rendering the footer
    render() {
        return (
            <div className="fo" >
                <Card className="text-center" bg="secondary" text="white">

                    <Card.Body>
                        <Card.Text>
                        The Best Train Ticket Reservation Website.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>&copy; {new Date().getFullYear()} Copyright: IT17056212</Card.Footer>
                </Card>
            </div>
        );
    }


}


