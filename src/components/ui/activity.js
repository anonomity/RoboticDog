import React from 'react'
import "./Vocab.scss"
const Activity = (props) => {
    return(
    <div className="activity-box">
        <h2 className="title" {...props}/>
    </div>
    )
}

export default Activity