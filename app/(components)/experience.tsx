"use client";
import CardDescription from "@/components/card-description";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { myExperienceData } from "@/data";
const Experience = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.8, once: true });
	const { awards, educations, organizationVolunteers, workTeachings } =
		myExperienceData();
	return (
		<section
			ref={ref}
			id="experience"
			className="min-h-[30rem]"
		>
			<div className="container mx-auto">
				<div className="w-full h-[0.5px] bg-cyan-600"></div>
				<div className="py-8">
					<h1 className="text-2xl text-center font-semibold">My Experience</h1>
					<div className="flex flex-col gap-y-8">
						<div className="flex flex-col gap-y-7">
							<h3 className="text-xl underline underline-offset-4">
								Education
							</h3>
							<div>
								{educations.map((el, index) => {
									return (
										<CardDescription
											key={index}
											{...el}
										/>
									);
								})}
							</div>
						</div>
						<div className="flex flex-col gap-y-3">
							<h3 className="text-xl underline underline-offset-4">
								Work & Teaching Assistant
							</h3>
							<div className="flex flex-col gap-y-2">
								{workTeachings.map((el, index) => {
									return (
										<CardDescription
											key={index}
											{...el}
										/>
									);
								})}
							</div>
						</div>
						<div className="flex flex-col gap-y-3">
							<h3 className="text-xl underline underline-offset-4">
								Organization & Volunteer
							</h3>
							<div className="flex flex-col gap-y-2">
								{organizationVolunteers.map((el, index) => {
									return (
										<CardDescription
											key={index}
											{...el}
										/>
									);
								})}
							</div>
						</div>
						<div className="flex flex-col gap-y-3">
							<h3 className="text-xl underline underline-offset-4">Awards</h3>
							<div className="flex flex-col gap-y-2">
								{awards.map((el, index) => {
									return (
										<CardDescription
											key={index}
											{...el}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
