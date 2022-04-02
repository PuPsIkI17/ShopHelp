import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

import MyNavbar from "../Components/Navbar"
import "../styles/additional.css"
import BarcodeScanner from "../Components/BarcodeScanner";
import Speech from "../Components/Speech";


const Additional = () => {

    return (
        <Container fluid className="Main">
            <MyNavbar type="Barcode Scanner"/>
            <Row className='pt-2 mt-2 text-center justify-content-md-center '>
                <Col md={{span: 3}}>
                    <h2>Scan your barcode</h2>
                </Col>
            </Row>
            <Row className='pt-2 mt-2 text-center justify-content-md-center '>
                <Col>
                    <BarcodeScanner/>
                </Col>
            </Row>
        </Container>
    )
}

export default Additional;
