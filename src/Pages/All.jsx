import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import MyNavbar from "../Components/Navbar"


import "../styles/Main.css"

const All = () => {
    return (
        <Container fluid className = "Main">
            <MyNavbar type = {"All"}/>
            <Row className = 'pt-5 mt-5 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} >
                   
                </Col>  
            </Row>
        </Container>
    )
}

export default All;