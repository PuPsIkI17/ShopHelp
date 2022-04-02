import React from "react";
import { Container, Row, Col, Card, Image} from 'react-bootstrap';

import { Link} from "react-router-dom";
import MyNavbar from "../Components/Navbar"
import IJBL from "../Products/ProductImages/jbl.jpg"
import SJBL from "../Products/ProductImages/hearing.gif"

import "../styles/Main.css"

const Tech = () => {
    return (
        <Container fluid className = "Main">
            <MyNavbar type={"Tech"}/>
            <Row className = 'pt-5 mt-5 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} className="pb-4" >
                    <Link to = "/product" state = {{type:3, name:"JBL"}}>
                        <Card className = "Image">
                            <Card.Img variant="top" src={IJBL} />
                            <Card.Body>                  
                                <Card.Title> <Image src={SJBL} alt="Logo" className = "ImageSign" />  </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col> 
            </Row>
        </Container>
    )
}

export default Tech;