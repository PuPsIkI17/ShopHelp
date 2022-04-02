import React from "react";
import { Container, Row, Col, Card, Image} from 'react-bootstrap';
import MyNavbar from "../Components/Navbar"
import IWater from "../Images/water.jpg"
import SWater from "../Images/waterSign.gif"

import "../styles/Main.css"
import Speech from "../Components/Speech";

const description = "Vodeem nah-hui. Car car Shoroi"

const Food = () => {
    return (
        <Container fluid className = "Main">
            <MyNavbar type = {"Water Miraqua"}/>
            <Row className = 'mt-3 pt-md-5 mt-md-5 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} className="pb-4" >
                    <Card className = "Image">
                        <Card.Img variant="top" src={IWater} />
                        <Card.Body>                  
                            <Card.Title> <Image src={SWater} alt="Logo" className = "ImageSign" />  </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>   
                <Col md={{ span: 3 }} className="pb-4" >
                    <h3>Description</h3>
                    {description}
                </Col>  
            </Row>
            <Speech description={description}/>
        </Container>
    )
}

export default Food;
