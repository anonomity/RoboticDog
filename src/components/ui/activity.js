import React from 'react'
import "./Vocab.scss"
const Activity = (props) => {
    return(
    <div class="activity-box">
        <h2 class="title" {...props}/>
    </div>
    )
}

export default Activity