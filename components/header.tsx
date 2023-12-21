"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import ListNav from "./list-nav";
import { Twirl as Hamburger } from "hamburger-react";
import { Menu, Transition } from "@headlessui/react";
import { listNav } from "@/data";
import { useStore } from "@/data/index";

const Header = () => {
	const [_, setOpen] = useState(false);
	const isNavbarHidden = useStore((state) => state.isNavbarHidden);

	return (
		<header
			className={`fixed ${
				isNavbarHidden ? "-translate-y-80" : "translate-y-0"
			}  z-50 top-0 transition-all duration-500 left-0 right-0 bg-slate-100 shadow-lg h-20 flex items-center justify-center`}
		>
			<div className="container flex justify-between mx-auto items-center">
				<Link href={"/"}>
					<h1 className="font-semibold lg:text-3xl text-xl md:text-2xl">
						Putu <span className="text-cyan-700">Bhanuartha</span>
					</h1>
				</Link>
				<div className="lg:block hidden">
					<ListNav />
				</div>
				<div className="block lg:hidden">
					<Menu
						as="div"
						className="relative inline-block text-left"
					>
						{({ open }) => {
							return (
								<>
									<div>
										<Menu.Button>
											<Hamburger
												onToggle={setOpen}
												toggled={open}
												toggle={setOpen}
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
											<div className="px-1 py-1">
												{listNav.map((el) => {
													return (
														<Menu.Item key={el.link}>
															{({ active }) => (
																<Link
																	href={el.link}
																	className={`${
																		active
																			? "bg-violet-500 text-white"
																			: "text-gray-900"
																	} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
																>
																	{el.title}
																</Link>
															)}
														</Menu.Item>
													);
												})}
											</div>
										</Menu.Items>
									</Transition>
								</>
							);
						}}
					</Menu>
				</div>
			</div>
		</header>
	);
};

export default Header;
