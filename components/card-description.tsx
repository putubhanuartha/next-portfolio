"use client";
import React, { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
export type CardDescriptionProps = {
	title: string;
	tag: string;
	from: string;
	until?: string;
	valueDesc: string;
	listDescription?: string[];
	linkFile?: string;
};
const CardDescription: React.FC<CardDescriptionProps> = ({
	from,
	listDescription,
	tag,
	title,
	until,
	valueDesc,
	linkFile,
}) => {
	const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
	return (
		<div className="bg-slate-50 rounded-lg shadow-lg overflow-clip">
			<div className="px-4 py-5 flex flex-col gap-y-2">
				<div className="flex items-center justify-between">
					<h2 className="text-3xl font-semibold">{title}</h2>
					{linkFile && (
						<a
							href={linkFile}
							download
						>
							<i>
								<FaDownload size={25} />
							</i>
						</a>
					)}
				</div>
				<h3 className="text-xl text-gray-600">{tag}</h3>
				{until ? (
					<p className="text-lg text-cyan-700">
						{from} - {until}
					</p>
				) : (
					<p className="text-lg text-cyan-700">{from}</p>
				)}
			</div>
			<div className="bg-white px-4 mt-2 py-4">
				{listDescription ? (
					<button
						onClick={() => setIsDropdownExpanded(!isDropdownExpanded)}
						className="flex items-center justify-between w-full"
					>
						<p className="font-semibold text-xl">{valueDesc}</p>
						<i
							className={`${
								isDropdownExpanded ? "rotate-90" : "rotate-0"
							} transition-all duration-100`}
						>
							<IoIosArrowForward />
						</i>
					</button>
				) : (
					<p className="font-semibold text-xl">{valueDesc}</p>
				)}
				<ul
					className={`flex flex-col gap-y-1.5 ${
						isDropdownExpanded
							? "opacity-100 max-h-[50rem] mt-3"
							: "opacity-0 max-h-[0rem] mt-0"
					} list-disc px-4 h-full`}
				>
					{listDescription && (
						<>
							{listDescription.map((el) => {
								return <li key={el}>{el}</li>;
							})}
						</>
					)}
				</ul>
			</div>
		</div>
	);
};

export default CardDescription;
