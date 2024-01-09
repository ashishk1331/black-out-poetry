"use client";

import Stats from "./Stats";
import { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";

function Base(props) {
	const [isBlack, setIsBlack] = useState(false);
	return (
		<p
			onClick={(e) => setIsBlack((prev) => !prev)}
			className={twMerge(
				"text-xl leading-relaxed transition-all",
				isBlack && "blacked bg-amber-800 text-amber-800",
			)}
		>
			{props.title}
		</p>
	);
}

export default function (props) {
	const outerDIV = useRef();

	function leftover() {
		let result = [];
		for (let child of outerDIV.current.children) {
			let text = child.textContent.trim();
			if (text && !child.classList.contains("blacked")) {
				result.push(text);
			}
		}
		return result.join(" ");
	}

	return (
		<div className="w-full flex flex-col items-left space-y-4 bg-amber-800/5 p-12 border-2 border-amber-800 rounded">
			<Stats count={props.text?.length || 0} copy={leftover} />
			<p className="pb-6">Click on words to blacken them.</p>
			<div
				ref={outerDIV}
				className="w-full flex flex-wrap space-x-1 justify-between"
			>
				{props.text &&
					props.text
						.split(" ")
						.map((title, index) => (
							<Base key={index} title={title} />
						))}
			</div>
		</div>
	);
}
