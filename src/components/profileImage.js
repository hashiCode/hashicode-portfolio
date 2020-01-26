import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function ProfileImage(props){

    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "profile.png" }) {
                childImageSharp {
                    fixed(width: 253, height: 270) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="Imagem do perfil"/>
}