import React from 'react';

import {Link} from 'gatsby';
import "./posts.scss";
import Layout from "../components/layout";

const allTagsIndex = ({data, pageContext}) => {
    const { tags } = pageContext;
    const strucTag = tags.map((tag, index) => {
        return <div className="tag-cont"  key={index}><Link to ={tag} className="tag">{tag}</Link></div>
    })
    return(
        <Layout>
            <div>
                <h2 className="tagTitle">All Tags</h2>
                <div className="Tags">
               
                    {strucTag}
                
                </div>
                
            </div>
        </Layout>
    )
}

export default allTagsIndex