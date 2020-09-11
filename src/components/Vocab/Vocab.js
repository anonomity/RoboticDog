import React from 'react';



function Vocab(props) {
    const wordList = props.words.map(w => {
        return <li>{w}</li>
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