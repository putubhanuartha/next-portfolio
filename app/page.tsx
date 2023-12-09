
import About from "./(components)/about";
import Contact from "./(components)/contact";
import Experience from "./(components)/experience";
import Hero from "./(components)/hero";
import Portfolio from "./(components)/portfolio";

export default function Home() {
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
