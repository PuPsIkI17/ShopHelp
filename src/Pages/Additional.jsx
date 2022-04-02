import React from "react";
import { Link} from "react-router-dom";
import { Container, Row, Col} from 'react-bootstrap';

import "../styles/additional.css"
import BarcodeScanner from "../Components/BarcodeScanner";


const Additional = () => {

    return (
        <div>
            <Container fluid className = "Main">
                <Row className = 'pt-2 mt-2 text-center justify-content-md-center '>
                    <Col md={{ span: 3 }} >
                        Qr code
                    </Col>  
                </Row>
                <BarcodeScanner/>
                <Row className = 'mt-2 text-center justify-content-md-center '>
                    <Col md={{ span: 3 }} >
                        <Link to = "/">
                            Go to Main page
                        </Link>
                    </Col>  
                </Row>
            </Container>
        </div>
    )
}

export default Additional;
