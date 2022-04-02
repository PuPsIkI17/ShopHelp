import React from "react";
import { Container, Row, Col, Card, Image} from 'react-bootstrap';
import { Link} from "react-router-dom";
import MyNavbar from "../Components/Navbar"
import IMalai from "../Products/ProductImages/malai.jpg"
import SMalai from "../Products/ProductImages/malaiSign.jpg"
import IWater from "../Products/ProductImages/water.jpg"
import SWater from "../Products/ProductImages/waterSign.gif"
import IJuice from "../Products/ProductImages/cappy.jpg"
import SJuice from "../Products/ProductImages/juiceSign.jpg"


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
                    <Link to = "/product" state = {{type:6, name:"Water"}}>
                        <Card className = "Image">
                            <Card.Img variant="top" src={IJuice} />
                            <Card.Body>                  
                                <Card.Title> <Image src={SJuice} alt="Logo" className = "ImageSign" />  </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>   
            </Row>
        </Container>
    )
}

export default Food;