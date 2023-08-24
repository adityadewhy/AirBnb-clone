import React from "react";
import Top from "./components/Header.jsx";
import GalleryGroup from "./components/Head.jsx";
import data from "../src/data.js";
import Card from "../src/components/Cards.jsx";

export default function App() {
	const slides = data.map((slide) => {
		return <Card key={slide.id} item={slide} />;
	});

	return (
		<div>
			<Top />
			<GalleryGroup />
      {slides}
		</div>
	);
}
