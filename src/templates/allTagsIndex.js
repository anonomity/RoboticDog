import React from 'react';

import {Link} from 'gatsby';

const allTagsIndex = ({data, pageContext}) => {
    const { tags } = pageContext;
    const strucTag = tags.map((tag, index) => {
        return <li key={index}><Link to ={tag}>{tag}</Link></li>
    })
    return(
        <div>
            <div>
                <h2>All Tags</h2>
                <ul>
                    {strucTag}
                </ul>
            </div>
        </div>
    )
}

export default allTagsIndex