import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

import MyNavbar from "../Components/Navbar"
import "../styles/additional.css"
import BarcodeScanner from "../Components/BarcodeScanner";
import Speech from "../Components/Speech";


const Additional = () => {

    return (
        <>
            <Container fluid className="Main">
                <MyNavbar type="Barcode Scanner"/>
                <Row className='pt-2 mt-2 text-center justify-content-md-center '>
                    <Col md={{span: 3}}>
                        Qr code
                    </Col>
                </Row>
                <div><BarcodeScanner/></div>
            </Container>
            <div><Speech/></div>
        </>
    )
}

export default Additional;
