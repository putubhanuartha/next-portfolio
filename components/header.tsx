import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="fixed z-50 top-0 left-0 right-0 bg-slate-100 shadow-lg h-20 flex items-center justify-center">
			<div className="container flex justify-between mx-auto items-center">
				<Link href={"/"}>
					<h1 className="font-semibold text-3xl">
						Putu <span className="text-cyan-700">Bhanuartha</span>
					</h1>
				</Link>
				<div className="lg:block hidden">
					<ul className="flex w-full justify-between gap-x-5 items-center">
						<li className="group">
							<a
								className="text-lg"
								href="#about"
							>
								About
							</a>
							<div className="h-1 max-w-0 w-full transition-all duration-500 group-hover:max-w-4xl bg-cyan-800"></div>
						</li>
						<li className="group">
							<a
								className="text-lg"
								href=""
							>
								Contact
							</a>
							<div className="h-1 max-w-0 w-full transition-all duration-500 group-hover:max-w-4xl bg-cyan-800"></div>
						</li>
						<li className="group">
							<a
								className="text-lg"
								href="#experience"
							>
								Experience
							</a>
							<div className="h-1 max-w-0 w-full transition-all duration-500 group-hover:max-w-4xl bg-cyan-800"></div>
						</li>
						<li className="group">
							<a
								className="text-lg"
								href="#portfolio"
							>
								Portfolio
							</a>
							<div className="h-1 max-w-0 w-full transition-all duration-500 group-hover:max-w-4xl bg-cyan-800"></div>
						</li>
						<li className="group">
							<a
								className="text-lg"
								href="https://medium.com/@putuaryabhanu03"
							>
								Blog
							</a>
							<div className="h-1 max-w-0 w-full transition-all duration-500 group-hover:max-w-4xl bg-cyan-800"></div>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
