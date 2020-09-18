import React from 'react';
import { Link } from "gatsby"
import "./lessonBox.scss";

const Lessons = ({ data }) => {
    const { edges } = data.allMdx
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {edges.map(edge => {
                const { frontmatter } = edge.node
                return (
                    <Link key={frontmatter.title} to={frontmatter.path} className="link"><div className="lesson-cont">
                   <h3>{frontmatter.title}</h3> 
                    <p>{frontmatter.exerpt}</p>
                   </ div></Link>
    )
})}
        </div >
    )
}

export default Lessons



