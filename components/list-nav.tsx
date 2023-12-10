import React from "react";
import { listNav } from "@/data";
const ListNav = () => {
	return (
		<ul className="flex w-full justify-between gap-x-5 items-center">
			{listNav.map((el) => {
				return (
					<li
						key={el.title}
						className="group"
					>
						<a
							className="text-lg"
							href={el.link}
						>
							{el.title}
						</a>
						<div className="h-1 max-w-0 w-full transition-all duration-500 group-hover:max-w-4xl bg-cyan-800"></div>
					</li>
				);
			})}
		</ul>
	);
};

export default ListNav;
