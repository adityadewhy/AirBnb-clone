import React from "react"

export default function Card(props) {
    return (
        <div>
            <img src={`/assets/${props.item.coverImage}`} className="slideImage" />
        </div>
    )
}