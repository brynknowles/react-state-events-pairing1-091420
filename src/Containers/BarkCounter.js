import React from 'react'

const BarkCounter = (props) => {
    console.log(props)
    
    return (
        <div>
            <h1>Noise Level:
                <span>{props.counter}</span>
            </h1>
        </div>

    )
}

export default BarkCounter