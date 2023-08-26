import React from "react"

export default function Card(props) {
    let badge;
    if (props.item.openSpots === 0) {
        badge = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badge = "ONLINE"
    }

    console.log(props.item.coverImg)

    return (
        <div className="slide">
            {badge && <div className="badge">{badge}</div>}
            <img src={`/assets/${props.item.coverImg}`} className="slideImage" />
            <div className="card--stats">
                <img src="/assets/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>

        </div>
    )
}