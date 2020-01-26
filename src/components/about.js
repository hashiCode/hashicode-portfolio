import React from "react"
import {
    Row,
    Col,
    Container,
} from 'react-bootstrap';
import dataService from "../services/dataService"
import ProfileImage from "./profileImage"

export default function About(props) {

    return (
        <React.Fragment>
            <Container fluid={true} className="my-4">
                <Row>
                    <Col sm={4} className="text-center">
                        <ProfileImage />
                    </Col>
                    <Col sm={8} className="about-text text-justify align-self-center mt-4 mb-2" dangerouslySetInnerHTML={{ __html: dataService.getInfo()}} />
                </Row>
            </Container>
        </React.Fragment>
    )

}