import React from "react";
import { Container, Row, Col, Card, Image} from 'react-bootstrap';
import { Link} from "react-router-dom";
import MyNavbar from "../Components/Navbar"
import IFood from "../Images/food.jpg"
import ITech from "../Images/tech.jpg"
import IPharmacy from "../Images/pharmacy.jpg"
import SFood from "../Images/foodSign.gif"
import STech from "../Images/techSign.jpg"
import SPharmacy from "../Images/pharmacySign.jpg"
import Barcode from "../Images/barcode.png"

import "../styles/Main.css"
import "../styles/Images.css"

const Main = () => {
    return (
        <Container fluid className = "Main">
            <MyNavbar type = {"Help-Shop"}/>
            <Row className = 'mt-3 pt-md-5 mt-md-5 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} className="pb-4" >
                    <Link to = "/food" >
                        <Card className = "Image">
                            <Card.Img variant="top" src={IFood} />
                            <Card.Body>                  
                                <Card.Title> <Image src={SFood} alt="Logo" className = "ImageSign" />  </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>  
                <Col md={{ span: 3 }} className="pb-4">
                    <Link to = "/tech" >
                        <Card className = "Image">
                            <Card.Img variant="top" src={ITech} />
                            <Card.Body>                  
                                <Card.Title> <Image src={STech} alt="Logo" className = "ImageSign" />  </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>  
                <Col md={{ span: 3 }} >
                    <Link to = "/pharmacy" className="pb-4" >
                        <Card className = "Image">
                            <Card.Img variant="top" src={IPharmacy} />
                            <Card.Body>                  
                                <Card.Title> <Image src={SPharmacy} alt="Logo" className = "ImageSign" />  </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>  
            </Row>
            <Row className = 'mt-2 text-center justify-content-md-center '>
                <Col md={{ span: 9 }} >
                    <hr/>
                </Col>  
            </Row>
            <Row className = 'mt-2 mb-5 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} >
                    <Link to = "/barcode" className="pb-4" >
                        <Card className = "Image">
                            <Card.Img variant="top" src={Barcode} />
                            <Card.Body>                  
                                <Card.Title> <Image src={SPharmacy} alt="Logo" className = "ImageSign" />  </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>  
            </Row>

        </Container>
    )
}

export default Main;