import React, { useEffect, useRef, useState } from "react";

export enum ScrollDirection {
	up = "up",
	down = "down",
	neutral = "neutral",
}
const useScrollDirection = () => {
	const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(
		ScrollDirection.neutral
	);
	const scrollPos = useRef(0);
	useEffect(() => {
		const scrollFc = (e: Event) => {
			const currentScrollPos = window.pageYOffset;
			if (currentScrollPos > scrollPos.current) {
				setScrollDirection(ScrollDirection.down);
			} else if (currentScrollPos < scrollPos.current) {
				setScrollDirection(ScrollDirection.up);
			}
			scrollPos.current = currentScrollPos;
		};
		window.addEventListener("scroll", scrollFc);
		return () => {
			removeEventListener("scroll", scrollFc);
		};
	}, []);
	return scrollDirection;
};

export default useScrollDirection;
