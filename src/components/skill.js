import React from "react"
import {
    Badge,
    Card,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./styles/skill.scss"

const buildBadges = (arrayContents) => {
    return arrayContents.map((content, index) => {
        return <Badge key={index} variant="dark" className="badge-content m-1">{content}</Badge>
    })
};

export default function Skill(props){

    const area = props.skill.area
    const imageIcon = props.skill.image
    const languages = buildBadges(props.skill.languages)
    const technologys = buildBadges(props.skill.technologys)

    return (
        <Card className="text-center skill-card">
            <Card.Body >
                <FontAwesomeIcon className="mb-2" icon={imageIcon} size="5x"/>
                <h3>{area}</h3>
                <hr/>
                <div className="font-weight-bold">Principais Linguagens</div>
                <div>{languages}</div>

                <div className="font-weight-bold mt-3">Tecnologias</div>
                <div>{technologys}</div>

            </Card.Body>
        </Card>
    )

}