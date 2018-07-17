import React from 'react'

const task = (props) => {
    return (
        <div>
            <div> Task: {props.name}</div>
            <input onChange={props.change.bind(this, props.id)} value={props.name} />
        </div>
    )
}

export default task;