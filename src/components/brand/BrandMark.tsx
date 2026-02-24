import { useState } from "react";

interface BrandMarkProps {
	className?: string;
	textClassName?: string;
}

export default function BrandMark({
	className = "h-8 w-auto",
	textClassName = "text-xl font-bold",
}: BrandMarkProps) {
	const [imageError, setImageError] = useState(false);

	if (imageError) {
		return <span className={textClassName}>ABM Nexttech LLP</span>;
	}

	return (
		<img
			src="/assets/generated/abm-nexttech-wordmark-transparent.dim_1200x300.png"
			alt="ABM Nexttech LLP"
			className={className}
			onError={() => setImageError(true)}
		/>
	);
}
