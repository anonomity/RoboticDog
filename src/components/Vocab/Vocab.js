import React from 'react';
import './Vocab.scss';


function Vocab(props) {
   
    const wordList = props.words.map((w, index) => {
        return <li key={index}>{w}</li>
    })
    return (
        
        <div class="infobox-container"> 
 
        <div class="triangle-l"></div> 
        <div class="triangle-r"></div> 
         
        <div class="infobox"> 
        <h3><span>Vocabulary List</span></h3> 
            <div class="listContain" >
            <ol class="list">
                {wordList}
            </ol>
            </div>
            <a  class ="link" href={props.link}>study on quizlet!</a>
        </div> 
         
        </div>
    )
}



export default Vocab