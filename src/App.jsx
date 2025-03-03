import React from "react";
import { useState } from "react";

const App = () => {
	const [isActive, setIsActive] = useState(false);

	const getBackgroundColor = () => {
		// Hex Colors
		let letter = "0123456789ABCDEF";
		let color = "#";

		for (let i = 0; i < 6; i++) {
			color += letter[Math.floor(Math.random() * letter.length)];
		}
		return color;
	};

	const handleClickColor = () => {
		const newColor = getBackgroundColor();
		document.body.style.backgroundColor = newColor;
		setIsActive(true);

		setTimeout(() => {
			setIsActive(false);
		}, 1000);
	};

	return (
		<div className="container">
			<h1 className={`heading__primary ${isActive ? "active" : ""}`}>
				Background
			</h1>
			<button className="btn" type="button" onClick={handleClickColor}>
				<span className="btn__letter">C</span>lick Me
			</button>
		</div>
	);
};

export default App;
