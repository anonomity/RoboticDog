import React from 'react';
import './Vocab.scss';


function Vocab(props) {
   
    const wordList = props.words.map((w, index) => {
        return <li key={index}>{w}</li>
    })
    return (
        
        <div className="infobox-container"> 
 
        <div className="triangle-l"></div> 
        <div className="triangle-r"></div> 
         
        <div className="infobox"> 
        <h3><span>{props.title}</span></h3> 
            <div className="listContain" >
            <ol className="list">
                {wordList}
            </ol>
            </div>
            <a  className ="link" href={props.link}>study on quizlet!</a>
        </div> 
         
        </div>
    )
}



export default Vocab