import CardImage from "@/components/card-image";
import React from "react";
import { portfolios } from "@/data";

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
					<div className="flex flex-wrap gap-x-5 mx-auto mt-5 gap-y-5">
						{portfolios.map((el, index) => {
							return (
								<CardImage
									key={index}
									{...el}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
