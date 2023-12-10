"use client"
import CardDescription from "@/components/card-description";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

const Experience = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.8, once: true });
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
								<CardDescription
									title="Brawijaya University"
									from="August 2021"
									tag="Bachelor of Information Systems"
									until="Present"
									valueDesc="GPA: 3.88 / 4.00"
									linkFile="/file/nilai.pdf"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-y-3">
							<h3 className="text-xl underline underline-offset-4">
								Work & Teaching Assistant
							</h3>
							<div className="flex flex-col gap-y-2">
								<CardDescription
									title="DOT Indonesia"
									from="Oct 2023"
									tag="Frontend Engineer Intern"
									until="January 2024"
									valueDesc="Description"
									listDescription={[
										"Building monolith Nest Js with React Js Application using Inertia",
										"Working with scrum - agile development method.",
									]}
								/>
								<CardDescription
									title="FILKOM UB LABORATORY OF COMPUTER SCIENCE"
									from="Aug 2023"
									until="Present"
									tag="Database Administration Practicum Assistant, FILKOM"
									valueDesc="Description"
									listDescription={[
										"Teaching and assisting students in database administration practicum",
									]}
								/>
								<CardDescription
									title="RAKAMIN ACADEMY X CORE INITIATIVE"
									from="Aug 2023"
									until="Sept 2023"
									tag="Frontend Developer, Virtual Internship"
									valueDesc="Description"
									listDescription={[
										"Design slicing from figma into frontend application with Vue",
										"Retrieve and manage data flow from external rest API.",
										"Deploying frontend application with Docker",
									]}
									linkFile="/file/merged_rakamin.pdf"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-y-3">
							<h3 className="text-xl underline underline-offset-4">
								Organization & Volunteer
							</h3>
							<div className="flex flex-col gap-y-2">
								<CardDescription
									title="BIOS (Badan Internal Olahraga dan Seni) FILKOM UB"
									from="Mar 2022"
									until="Feb 2023"
									tag="Homeband Division Staff, Experts Staff"
									valueDesc="Description"
									listDescription={[
										"Band Manager",
										"Managing recording session",
									]}
									linkFile="/file/staff_homeband.pdf"
								/>
								<CardDescription
									title="LO EVENT GEMASTIK XVI"
									from="Sept 2023"
									until="Sept 2023"
									tag="Public Relation Staff, Volunteer GEMASTIK XVI"
									valueDesc="Description"
									listDescription={[
										"Communicate with event talent in opening ceremony of the event",
										"Coordinating with contestants of the competitions",
									]}
									linkFile="/file/humas_gemastik.pdf"
								/>
								<CardDescription
									title="KBMSI FILKOM UB"
									from=" Jun 2022"
									until="Nov 2022"
									tag="Fundraiser and Finance Staff, Volunteer WOW SI 2022"
									valueDesc="Description"
									listDescription={[
										"Managing finance and source of income at WOW SI 2022",
										"Managing distribution of consumption during the event",
										"Communicate with treasurer about event finance",
									]}
									linkFile="/file/staff_wowsi.pdf"
								/>
								<CardDescription
									from="Jun 2022"
									tag="Public Relation Staff, Volunteer ORMABA 2022"
									title="UNIKAHIDHA UB"
									until="Oct 2022"
									valueDesc="Description"
									listDescription={[
										"Managing mailing and communicate with external parties",
										"Making documentation video and photo",
										"Managing social media content for the event",
									]}
								/>
								<CardDescription
									from="Apr 2021"
									tag="Secretary and Mailing Staff, Volunteer HBCC 2022"
									title="UNIKAHIDHA UB"
									until="Jul 2021"
									valueDesc="Description"
									listDescription={[
										"Managing mailing with secretary and public relation division",
									]}
								/>
							</div>
						</div>
						<div className="flex flex-col gap-y-3">
							<h3 className="text-xl underline underline-offset-4">Awards</h3>
							<div className="flex flex-col gap-y-2">
								<CardDescription
									title="HIMATEKKOM UB"
									from="Nov 2022"
									tag="2nd Place IoT IDE-LITE 2022"
									valueDesc="IoT Competition"
									linkFile="/file/iot_competition.png"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
