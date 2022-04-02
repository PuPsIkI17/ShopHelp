import React from "react";
import { Container, Row, Col, Card, Image} from 'react-bootstrap';
import { Link} from "react-router-dom";
import MyNavbar from "../Components/Navbar"

import IMalai from "../Products/ProductImages/malai.jpg"
import SMalai from "../Products/ProductImages/malaiSign.jpg"
import IWater from "../Products/ProductImages/water.jpg"
import SWater from "../Products/ProductImages/waterSign.gif"
import IJBL from "../Products/ProductImages/jbl.jpg"
import SJBL from "../Products/ProductImages/hearing.gif"
import IParacetamol from "../Products/ProductImages/paracetamol.jpg"
import SParacetamol1 from "../Products/ProductImages/paracetamol1.png"
import SParacetamol2 from "../Products/ProductImages/paracetamol2.png"
import INurofen from "../Products/ProductImages/nurofen.jpg"
import SNurofen from "../Products/ProductImages/nurofenSign.jpg"


import "../styles/Main.css"

const Food = () => {
    return (
        <Container fluid className = "Main">
            <MyNavbar type = {"Food"}/>
            <Row className = 'mt-3 pt-md-5 mt-md-5 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} className="pb-4" >
                    <Link to = "/product" state = {{type:1, name:"Malai"}}>
                        <Card className = "Image">
                            <Card.Img variant="top" src={IMalai} />
                            <Card.Body>                  
                                <Card.Title> <Image src={SMalai} alt="Logo" className = "ImageSign" />  </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col> 
                <Col md={{ span: 3 }} className="pb-4" >
                    <Link to = "/product" state = {{type:2, name:"Water"}}>
                        <Card className = "Image">
                            <Card.Img variant="top" src={IWater} />
                            <Card.Body>                  
                                <Card.Title> <Image src={SWater} alt="Logo" className = "ImageSign" />  </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>  
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
            <Row className = 'mt-3 pt-md-2 mt-md-2 text-center justify-content-md-center '>
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

export default Food;