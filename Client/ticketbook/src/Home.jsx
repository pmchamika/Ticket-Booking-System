import React, { Component } from 'react';


import { Card} from 'react-bootstrap';

import ImageSlide from "./JSX/ImageSlide";
import Detailsindexjs from "./JSX/Detailsindexjs";

export default class Home extends Component {
    render() {
        return (
            <div>
                <ImageSlide/>
                <Detailsindexjs/>
            </div>
        );
    }


}
