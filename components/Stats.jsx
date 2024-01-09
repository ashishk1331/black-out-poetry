import { useState, useEffect } from "react";

export default function (props) {
	const [isCopied, setIsCopied] = useState(false);

	useEffect(() => {
		if (isCopied) {
			setTimeout(() => {
				setIsCopied(false);
			}, 1000);
		}
	}, [isCopied]);

	return (
		<div className="w-full text-gray-800 flex justify-between items-center text-sm">
			<div className="flex items-center space-x-4">
				<button
					className="p-2 px-4 border-2 border-amber-800 rounded bg-amber-800/5"
					onClick={(e) => {
						navigator.clipboard.writeText(props.copy());
						setIsCopied(true);
					}}
				>
					Copy
				</button>
				{isCopied && <p>Copied!</p>}
			</div>

			<small className="text-sm font-medium leading-none">
				{props.count} words
			</small>
		</div>
	);
}
