"use client";

import React, { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { MdOutlineGpsFixed } from "react-icons/md";
import { motion, useInView } from "framer-motion";
const Hero = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.8, once: true });
	return (
		<div
			ref={ref}
			className="w-full pt-20 xl:pt-0"
		>
			<div className="container mx-auto min-h-screen flex items-center justify-between flex-wrap">
				<div className="flex flex-col gap-y-2 max-w-2xl font-semibold">
					{isInView && (
						<>
							<motion.p
								initial={{ opacity: 0, y: 100 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								className="text-3xl "
							>
								Hi 🙌
							</motion.p>
							<motion.h1
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3 }}
								className="lg:text-5xl text-4xl"
							>
								I&apos;am Putu <span className="text-cyan-800">Bhanuartha</span>
							</motion.h1>
							<motion.div
								initial={{ opacity: 0, x: -100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.4 }}
							>
								<TypeAnimation
									preRenderFirstString={true}
									sequence={[
										500,
										"Frontend Enthusiast",
										500,
										"Backend Enthusiast",
										500,
										"Progressive Web Apps",
										500,
										"Responsive Design",
										500,
									]}
									speed={50}
									className="text-2xl md:text-3xl lg:text-4xl"
									repeat={Infinity}
								/>
							</motion.div>
							<motion.p
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.8 }}
								className="text-cyan-700 text-xl flex items-center gap-x-2 font-semibold"
							>
								<MdOutlineGpsFixed />
								Gresik, East Java
							</motion.p>
							<motion.button
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.8, ease: "easeIn" }}
								className="w-fit bg-cyan-700 block hover:bg-cyan-800 transition-all duration-300 text-white px-2 py-1.5 rounded-lg"
							>
								<a href="#about">About Me</a>
							</motion.button>
						</>
					)}
				</div>
				{isInView && (
					<div>
						<motion.div
							initial={{ opacity: 0, translateX: 100 }}
							animate={{ opacity: 1, translateX: 0 }}
							transition={{ duration: 0.3, delay: 1.2 }}
						>
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 500 500"
								className="w-[20rem] h-[20rem] md:h-[25rem] md:w-[25rem] xl:w-[30rem] xl:h-[30rem]"
								id="blobSvg"
								style={{ opacity: 1 }}
							>
								<image
									x="0"
									y="0"
									width="100%"
									height="100%"
									clipPath="url(#shape)"
									href="/profile.jpg"
									preserveAspectRatio="none"
								></image>{" "}
								<defs>
									{" "}
									<linearGradient
										id="gradient"
										x1="0%"
										y1="0%"
										x2="0%"
										y2="100%"
									>
										{" "}
										<stop
											offset="0%"
											style={{ stopColor: "rgb(238, 205, 163)" }}
										></stop>{" "}
										<stop
											offset="100%"
											style={{ stopColor: "rgb(195, 50, 113)" }}
										></stop>{" "}
									</linearGradient>{" "}
								</defs>{" "}
								<clipPath id="shape">
									<path
										id="blob"
										fill="url(#gradient)"
									>
										{" "}
										<animate
											attributeName="d"
											dur="10000ms"
											repeatCount="indefinite"
											values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
										></animate>{" "}
									</path>
								</clipPath>
							</svg>
						</motion.div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Hero;
