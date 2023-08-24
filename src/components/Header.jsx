import React from "react";
import logo from "./assets/Vector.png";

export default function Top() {
	return (
		<header className="header">
			<nav className="navbar">
				<img src={logo} alt="logo" />
			</nav>
		</header>
	);
}
