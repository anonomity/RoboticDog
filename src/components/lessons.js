import React from 'react';
import { Link } from "gatsby"


const Lessons = ({data}) => {
    const {edges} = data.allMarkdownRemark
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {edges.map(edge => {
                const {frontmatter} = edge.node
                return (
                    <Link key={frontmatter.title} to={frontmatter.path}>{frontmatter.title}</Link>
                   
                )
            })}
        </div>
    )
}

export default Lessons



