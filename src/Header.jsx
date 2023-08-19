import React from "react";
import logo from "./assets/Vector.png";
import imgGroup from "./assets/Group77.png"

export default function Header() {
	return (
		<header className="header">
			<nav className="navbar">
				<img src={logo} alt="logo" />
			</nav>

            <div className="gallery">
                <img src={imgGroup} alt="group77" />
            </div>
		</header>
	);
}
