import React from "react";
import imgGroup from "./assets/Group77.png";

export default function GalleryGroup() {
	return (
		<div className="gallery">
			<img src={imgGroup} alt="group77" className="images" />
			<h1 className="gallery--header">Online Experiences</h1>
			<p className="gallery--text">
				Join unique interactive activities led by one-of-a-kind hosts—all
				without leaving home.
			</p>
		</div>
	);
}
