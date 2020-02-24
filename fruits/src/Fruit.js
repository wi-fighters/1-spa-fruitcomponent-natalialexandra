import React from 'react'

export default function Fruit(props) {
    return (
        <div key={props.i}>
            <p>{props.item.fruit}, color = {props.item.color} </p>
            <button onClick={() => { props.changeColor(props.i) }}>Change color</button>
            <button onClick={() => { props.removeItem(props.i) }}>Delete me</button>
        </div>
    )
}
