import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import { Link} from "react-router-dom";

import "../styles/Main.css"

const Main = () => {
    return (
        <Container fluid className = "Main">
            <Row className = 'pt-5 mt-5 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} >
                    Help-Shop
                </Col>  
            </Row>
            <Row className = 'mt-2 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} >
                    <Link to = "/qr">
                        Qr code
                    </Link>
                </Col>  
            </Row>

        </Container>
    )
}

export default Main;