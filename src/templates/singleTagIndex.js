import React from 'react';

import {Link} from 'gatsby';
import "./posts.scss";
import Layout from "../components/layout";

const sindleTagIndex = ({data, pageContext}) => {
    const { posts, tagName } = pageContext
    const strucPost = posts.map((post, index) => {
        return <Link to ={post.frontmatter.path} className="link"><div className="lesson-cont" key={index}>{post.frontmatter.title}</div> </Link>
    })
    return(
        <Layout>
            <div className="tagTitle">
                Posts about <strong >{tagName}</strong>
            </div>
            
                <div >
                    {strucPost}
                </div>
      
        </Layout>
    )
}

export default sindleTagIndex