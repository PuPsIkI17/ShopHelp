import React from "react";
import { Container, Row, Col, Card, Image} from 'react-bootstrap';
import { Link} from "react-router-dom";
import MyNavbar from "../Components/Navbar"
import IMalai from "../Images/malai.webp"
import SMalai from "../Images/malaiSign.jpg"


import "../styles/Main.css"

const Food = () => {
    return (
        <Container fluid className = "Main">
            <MyNavbar type = {"Food"}/>
            <Row className = 'mt-3 pt-md-5 mt-md-5 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} className="pb-4" >
                    <Link to = "/food" >
                        <Card className = "Image">
                            <Card.Img variant="top" src={IMalai} />
                            <Card.Body>                  
                                <Card.Title> <Image src={SMalai} alt="Logo" className = "ImageSign" />  </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>  
            </Row>
        </Container>
    )
}

export default Food;