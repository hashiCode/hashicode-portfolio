import React from "react"

export default function SectionMarkdown(props) {
    return (
        <React.Fragment>
            <h1 className="bd-title mt-3">{props.title}</h1>
            <hr/>
            <div dangerouslySetInnerHTML={{ __html: props.markdownAsHtml}}/>
        </React.Fragment>
    )
}