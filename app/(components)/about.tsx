"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { IoLogoFirebase } from "react-icons/io5";
import {
	FaLinkedin,
	FaMedium,
	FaTwitter,
	FaInstagram,
	FaHtml5,
	FaCss3,
	FaJs,
	FaNodeJs,
	FaPhp,
	FaReact,
	FaJava,
	FaDocker,
	FaAws,
	FaLaravel,
	FaGithub,
} from "react-icons/fa";
import { useInView, motion } from "framer-motion";
import { aboutMeData } from "@/data";
import { IconType } from "react-icons";
const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.8, once: true });
	const { aboutMe, socials, techSkills } = aboutMeData();
	return (
		<section
			ref={ref}
			id="about"
			className=" bg-slate-50 min-h-[30rem]"
		>
			<div className="container mx-auto">
				<div className="w-full h-[0.5px] bg-cyan-600"></div>
				<div className="py-8">
					{isInView && (
						<>
							<motion.h1
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3 }}
								className="text-2xl text-center font-semibold"
							>
								About Me
							</motion.h1>
							<div className="flex flex-col gap-y-6 mt-6">
								{/* Self Description */}
								<motion.p
									initial={{ opacity: 0, x: -100 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.3 }}
									className="text-lg"
								>
									{aboutMe}
								</motion.p>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.7 }}
									className="flex items-center gap-x-2"
								>
									{socials.map((el, index) => {
										const Icon: IconType = el.icon;
										return (
											<Link
												key={index}
												href={el.link}
												className={`w-fit ${el.style} transition-all duration-300`}
											>
												<Icon size={40} />
											</Link>
										);
									})}
								</motion.div>
								{/* Skills */}
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 1.1 }}
								>
									<h3 className="text-xl">Skills</h3>
									<div className="flex items-center gap-x-2 flex-wrap">
										{techSkills.map((el, index) => {
											const Icon : IconType = el.icon
											return (
												<i key={index}>
													<Icon size={50} className={el.color} />
												</i>
											);
										})}
									</div>
								</motion.div>
							</div>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default About;
