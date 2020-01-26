import React from "react"
import {
    Container,
    CardDeck,
} from 'react-bootstrap'
import Skill from "./skill"
import dataService from "../services/dataService"

export default function Skills(props){

    const skillsData = dataService.getSkills()
    const skills = skillsData.map((skill, index) => {
            return (
                <Skill key={index} skill={skill}/>
            )
        })

    return (
        <Container fluid>
            <CardDeck>
                {skills}
            </CardDeck>
        </Container>
    )

}