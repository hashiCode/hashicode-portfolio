import React from "react"
import "./styles/footer.scss"

export default function Footer(props){

    return(
        <React.Fragment>
            <footer className="footer">
                {props.children}
            </footer>
        </React.Fragment>
    )
}
