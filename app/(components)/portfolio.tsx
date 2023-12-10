import CardImage from "@/components/card-image";
import React from "react";

const Portfolio = () => {
	return (
		<section
			id="portfolio"
			className="min-h-[30rem]"
		>
			<div className="container mx-auto">
				<div className="w-full h-[0.5px] bg-cyan-600"></div>
				<div className="py-8">
					<h1 className="text-2xl text-center">My Portfolio</h1>
					<div className="flex flex-wrap gap-x-5 mx-auto mt-5">
						<CardImage
							urlImage="/portfolio/gala.png"
							linkRepo={["https://github.com"]}
							tag="Next Js, React Js, Framer Motion"
							title="GALA 55 Concert Ticket Website"
							linkDeployed={["https://gala-website-client.vercel.app"]}
						/>
						<CardImage
							urlImage="/portfolio/web-desa.png"
							linkRepo={["https://github.com"]}
							tag="React Js, Framer Motion, Chart Js"
							title="Website Desa Sidorejo Client Application"
							linkDeployed={["https://website-desa-client-ashen.vercel.app"]}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
