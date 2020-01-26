import React from "react"
import SEO from "../components/seo"
import {
  Container,
} from 'react-bootstrap';

const NotFoundPage = () => (
  <Container className="text-justify align-self-center">
    <SEO title="404: Not found" />
    <h1>404 <span role="img" aria-labelledby="Emoji triste">😕</span></h1>
    <p>Página inexistente...</p>
  </Container>
)

export default NotFoundPage
