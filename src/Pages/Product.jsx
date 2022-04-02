import React from "react";
import { Container, Row, Col, Card, Image} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import MyNavbar from "../Components/Navbar"

import IMalai from "../Products/ProductImages/malai.jpg"
import SMalai from "../Products/ProductImages/malaiSign.jpg"
import IWater from "../Products/ProductImages/water.jpg"
import SWater from "../Products/ProductImages/waterSign.gif"
import IJBL from "../Products/ProductImages/jbl.jpg"
import SJBL from "../Products/ProductImages/hearing.gif"
import IParacetamol from "../Products/ProductImages/paracetamol.jpg"
import SParacetamol1 from "../Products/ProductImages/paracetamol1.png"
import INurofen from "../Products/ProductImages/nurofen.jpg"
import SNurofen from "../Products/ProductImages/nurofenSign.jpg"


import "../styles/Main.css"
import Speech from "../Components/Speech";

const details = [
    {
        title: "Cook only with quality malai and choose Baneasa malai, the malai recommended by all housewives!",
        description: "Malai is an ingredient used for both main dishes and desserts, it is obtained from the best quality corn. Baneasa extra corn is a degerminated corn, ie before the grinding process, through the technological production process, the germs inside the corn grains were removed.",
        price: "5 lei"
    },
    {
        title:"Take a look at the list of attributes, features, and benefits you might get when choosing to drink plain water from Miraqua",
        description:"Because we know how important water is for you, we offer you a box of 12 bottles of Borsec plain water, in the 0.5 liter version and a plastic container, ideal to be taken with you for a walk, work or a trip!",
        price: "1.9 lei"
    },
    {
        title:"JBL FLIP 5 Portable Wireless Bluetooth Speaker IPX7 Waterproof On-The-Go Bundle with Boomph Hardshell Protective Case - Black",
        description:"LOUD & CLEAR MUSIC ANYWHERE: This wireless Bluetooth speaker has a new racetrack-shaped driver that delivers crystal clear and loud music as well as strong bass. The portable speaker is wireless so you can listen to music during your outdoor and travel adventures.",
        price: "600 lei"
    },
    {
        title:"Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known.",
        description:"Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers. It relieves pain in mild arthritis but has no effect on the underlying inflammation and swelling of the joint.",
        price: "15 lei"
    },
    {
        title:"Nurofen 200mg Coated Tablets work where they are needed – at the site of pain*. They quickly relieve pain and lower temperature",
        description:"Adults and children 12 years and older: Swallow 2 tablets (400 mg) with water, then, if necessary, take 1 or 2 tablets (200 mg or 400 mg) every 4 hours.Do not take more than 6 tablets (1200 mg) in 24 hours.Not suitable for children under 12 years.        If symptoms persist for more than 3 days or if new symptoms occur, stop treatment at once and consult your doctor.",
        price: "30 lei"
    }
]

const Product = () => {
    const location = useLocation();
    const type = location.state.type;
    const name = location.state.name;
    let IPhoto = IMalai;
    let SPhoto = SMalai;

    if(type === 2){
        IPhoto = IWater;
        SPhoto = SWater
    }
    if(type === 3){
        IPhoto = IJBL;
        SPhoto = SJBL
    }

    if(type === 4){
        IPhoto = IParacetamol;
        SPhoto = SParacetamol1;
    }

    if(type === 5){
        IPhoto = INurofen;
        SPhoto = SNurofen;
    }

    return (
        <Container fluid className = "Main">
            <MyNavbar type = {name}/>
            <Row className = 'mt-3 pt-md-5 mt-md-5 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} className="pb-4" >
                    <Card className = "Image">
                        <Card.Img variant="top" src={IPhoto} />
                        <Card.Body>                  
                            <Card.Title> <Image src={SPhoto} alt="Logo" className = "ImageSign" />  </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>   
                <Col md={{ span: 5 }} className="pb-4" >
                    <h3>Details:</h3>
                    <b>{details[type - 1].title}</b>
                    <br/>
                    <br/>
                    <p>
                        {details[type - 1].description}
                    </p>
                    <br/>
                    <br/>
                    <h5>Price</h5> {details[type - 1].price}
                </Col>  
            </Row>
            <Speech description={"Details" + details[type - 1].title + details[type - 1].description + "  price" + details[type - 1].price}/>
        </Container>
    )
}

export default Product;