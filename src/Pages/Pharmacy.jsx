import React from "react";
import { Container, Row, Col, Card, Image} from 'react-bootstrap';

import { Link} from "react-router-dom";
import MyNavbar from "../Components/Navbar"
import IParacetamol from "../Products/ProductImages/paracetamol.jpg"
import SParacetamol1 from "../Products/ProductImages/paracetamol1.png"
import SParacetamol2 from "../Products/ProductImages/paracetamol2.png"
import INurofen from "../Products/ProductImages/nurofen.jpg"
import SNurofen from "../Products/ProductImages/nurofenSign.jpg"

import "../styles/Main.css"

const Tech = () => {
    return (
        <Container fluid className = "Main">
            <MyNavbar type={"Pharmacy"}/>
            <Row className = 'pt-5 mt-5 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} className="pb-4" >
                <Link to = "/product" state = {{type:4, name:"Paracetamol"}}>
                        <Card className = "Image">
                            <Card.Img variant="top" src={IParacetamol} />
                            <Card.Body>                  
                                <Card.Title> 
                                    <Image src={SParacetamol1} alt="Logo" className = "ParacetamolSign1" />  
                                    <Image src={SParacetamol2} alt="Logo" className = "ParacetamolSign2" />  
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md={{ span: 3 }} className="pb-4" >
                    <Link to = "/product" state = {{type:5, name:"Nurofen"}}>
                        <Card className = "Image">
                            <Card.Img variant="top" src={INurofen} />
                            <Card.Body>                  
                                <Card.Title> <Image src={SNurofen} alt="Logo" className = "ParacetamolSign1" />  </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col> 
            </Row>
        </Container>
    )
}

export default Tech;