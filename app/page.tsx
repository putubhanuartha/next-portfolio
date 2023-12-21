"use client";
import useScrollDirection from "@/hooks/useScrollDirection";
import About from "./(components)/about";
import Contact from "./(components)/contact";
import Experience from "./(components)/experience";
import Hero from "./(components)/hero";
import Portfolio from "./(components)/portfolio";
import { useStore } from "@/data/index";
import { useEffect } from "react";

export default function Home() {
	const setIsScrollUp = useStore((state) => state.setIsScrollUp);
	const setIsNavbarHidden = useStore((state) => state.setIsNavbarHidden);
	const scroll = useScrollDirection();

	useEffect(() => {
		setIsScrollUp(!(scroll === "down"));
		setIsNavbarHidden()
	}, [scroll, setIsNavbarHidden, setIsScrollUp]);
	return (
		<>
			<Hero />
			<About />
			<Experience />
			<Portfolio />
			<Contact />
		</>
	);
}
