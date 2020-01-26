import React from "react"
import Footer from "./footer"
import About from "./about"
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import dataService from "../services/dataService"
import SectionMarkdown from "./sectionMarkdown"
import Skills from "./skills"
import SEO from "./seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./styles/content.scss"

const generateIcon = (icon) => <FontAwesomeIcon className="mx-2 footer-icon" icon={icon} size="lg"/>

export default function Content(props) {

    return (
            <React.Fragment>
                <SEO title="Scott Takahashi"/>
                <About />
                <Skills />
                <Container fluid={true} className="my-5">
                    <SectionMarkdown title={"Experiência"} markdownAsHtml={dataService.getExperiences()} />
                    <SectionMarkdown title={"Educação"} markdownAsHtml={dataService.getEducation()} /> 
                </Container>
                <Footer>
                    <Container fluid={true}>
                        <Row>
                            <Col>
                                <a className="source-link" href="https://github.com/hashiCode/hashicode-portfolio" target="_blank" rel="noopener noreferrer">Source</a>
                            </Col>
                            <Col className="text-right">
                                <a href="https://github.com/hashiCode/" target="_blank" rel="noopener noreferrer">
                                    {generateIcon(["fab", "github"])}
                                </a>
                                <a href="https://www.linkedin.com/in/sytakahashi/" target="_blank" rel="noopener noreferrer">
                                    {generateIcon(["fab", "linkedin"])}
                                </a>
                                <a href="https://stackoverflow.com/users/5087454/kuroobi" target="_blank" rel="noopener noreferrer">
                                    {generateIcon(["fab", "stack-overflow"])}
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Footer> 
            </React.Fragment>
        
    )

}