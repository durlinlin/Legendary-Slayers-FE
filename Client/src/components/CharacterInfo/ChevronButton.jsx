const styles = {
	main: {
		transformOrigin: "center",
	},
	left: {},
	right: {
		transform: "rotate(180deg)",
	},
};

export default function ChevronArrow({ dir, ...props }) {
	if (dir != null && dir !== "left" && dir !== "right")
		throw new Error("Chevron only supports 'left' and 'right' direction");

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			style={{
				...styles.main,
				...styles[dir],
			}}
			{...props}>
			<path
				d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
				fill="none"
				stroke="currentColor"
				strokeMiterlimit="10"
				strokeWidth="32"
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="32"
				d="M296 352l-96-96 96-96"
			/>
		</svg>
	);
}
