import Link from "next/link";
import React from "react";
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
const About = () => {
	return (
		<section
			id="about"
			className=" bg-slate-50 min-h-[30rem]"
		>
			<div className="container mx-auto">
				<div className="w-full h-[0.5px] bg-cyan-600"></div>
				<div className="py-8">
					<h1 className="text-2xl text-center font-semibold">About Me</h1>
					<div className="flex flex-col gap-y-6 mt-6">
						{/* Self Description */}
						<p className="text-lg">
							I am a student of Information Systems at Brawijaya University. My
							primary interest lies in the software development field,
							especially in web development. I currently have a deep interest in
							frontend development by utilizing a set of tools and framework
							such as React Js to build a web user interface based on design
							guidelines and best practices. I am always eager to learn new
							things especially in technology and actively engage in the
							implementation of a project.
						</p>
						<div className="flex items-center gap-x-2">
							<Link
								href={"/"}
								className="text-cyan-700 w-fit hover:text-cyan-900 transition-all duration-300"
							>
								<FaLinkedin size={40} />
							</Link>
							<Link
								href={"https://medium.com/@putuaryabhanu03"}
								className="text-cyan-900 w-fit hover:text-black transition-all duration-300"
							>
								<FaMedium size={40} />
							</Link>
							<Link
								href={"/"}
								className="text-cyan-400 w-fit hover:text-cyan-500 transition-all duration-300"
							>
								<FaTwitter size={40} />
							</Link>
							<Link
								href={"/"}
								className="text-cyan-700 w-fit hover:text-cyan-900 transition-all duration-300"
							>
								<FaInstagram size={40} />
							</Link>
							<Link
								href={"/"}
								className="text-cyan-900 w-fit hover:text-cyan-700 transition-all duration-300"
							>
								<FaGithub size={40} />
							</Link>
						</div>
						{/* Skills */}
						<div>
							<h3 className="text-xl">Skills</h3>
							<div className="flex items-center gap-x-2">
								<i className="text-orange-600">
									<FaHtml5 size={45} />
								</i>
								<i className="text-blue-600">
									<FaCss3 size={45} />
								</i>
								<i className="text-yellow-400">
									<FaJs size={45} />
								</i>
								<i className="text-green-600">
									<FaNodeJs size={45} />
								</i>
								<i className="text-purple-700">
									<FaPhp size={60} />
								</i>
								<i className="text-blue-400">
									<FaReact size={45} />
								</i>
								<i className="text-red-600">
									<FaJava size={45} />
								</i>
								<i className="text-blue-400">
									<FaDocker size={45} />
								</i>
								<i className="text-red-500">
									<FaLaravel size={45} />
								</i>
								<i className="text-orange-400">
									<FaAws size={45} />
								</i>
								<i className="text-yellow-400">
									<IoLogoFirebase size={45} />
								</i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;