import React from "react";
import { Container, Row, Col} from 'react-bootstrap';

import MyNavbar from "../Components/Navbar"
import "../styles/additional.css"


const Pharmacy = () => {

    return (
        <Container fluid className = "Main">
            <MyNavbar type = {"Pharmacy"}/>
            <Row className = 'pt-2 mt-2 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} >
                    
                </Col>  
            </Row>
        </Container>
    )
}

export default Pharmacy;