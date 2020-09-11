import React from 'react';



function Vocab(props) {
    const wordList = props.words.map((w, index) => {
        return <li key={index}>{w}</li>
    })
    return (
        <div>
            <ol>
                {wordList}
            </ol>
        </div>
    )
}

export default Vocab