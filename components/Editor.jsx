import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function (props) {
	const [isLocked, setIsLocked] = useState(false);
	return (
		<div className="w-full flex flex-col items-left space-y-4 bg-amber-800/5 p-12 border-2 border-amber-800 rounded mb-8">
			<div className="flex items space-x-4">
				<button
					className="p-2 px-4 border-2 border-amber-800 rounded bg-amber-800/5 w-fit"
					onClick={(e) => {
						if (!isLocked) {
							props.setText("");
						}
					}}
				>
					Clear
				</button>
				<button
					className={twMerge(
						"p-2 px-4 border-2 border-amber-800 rounded bg-amber-800/5 w-fit transition-all",
						isLocked && "bg-amber-800 text-amber-100",
					)}
					onClick={(e) => setIsLocked((prev) => !prev)}
				>
					{isLocked ? "Locked" : "Lock"}
				</button>
			</div>
			<textarea
				value={props.text}
				onChange={(e) => {
					if(!isLocked){
						props.setText(e.target.value)
					}
				}}
				placeholder="place your text here..."
				className="outline-none border-none bg-amber-800/5"
			></textarea>
		</div>
	);
}
