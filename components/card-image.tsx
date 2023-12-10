"use client";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
export type CardImageProps = {
	urlImage: string;
	title: string;
	tag: string;
	linkRepo: string[];
	linkDemo?: string[];
	linkDeployed: string[];
};
const CardImage: React.FC<CardImageProps> = ({
	linkRepo,
	tag,
	title,
	urlImage,
	linkDemo,
	linkDeployed,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<div className="shadow-lg w-96 relative rounded-lg overflow-clip group mx-auto md:mx-0">
				<div className="relative w-96 h-52 group-hover:opacity-30 transition-all duration-300">
					<Image
						priority
						style={{ objectFit: "cover" }}
						fill
						alt={title + " image"}
						src={urlImage}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<button
					onClick={openModal}
					className="absolute hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-500 text-white px-3 py-2 left-[50%] -translate-x-[50%] top-[30%]"
				>
					Details
				</button>
				<div className="px-4 py-5">
					<h2 className="text-lg font-semibold">{title}</h2>
					<h3 className="underline underline-offset-4">{tag}</h3>
				</div>
			</div>
			<Transition
				appear
				show={isOpen}
				as={Fragment}
			>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={closeModal}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										Project Links
									</Dialog.Title>
									<div className="mt-2 flex flex-col gap-y-2">
										<div>
											<h4>Link Repo : </h4>
											<ul className="list-disc px-6">
												{linkRepo.map((el) => {
													return (
														<li key={el}>
															<Link
																href={el}
																className="underline text-blue-600 hover:text-blue-800"
															>
																{el}
															</Link>
														</li>
													);
												})}
											</ul>
										</div>
										{linkDemo && (
											<div>
												<h4>Link Demo </h4>
												<ul className="list-disc px-6">
													{linkDemo.map((el) => {
														return (
															<li key={el}>
																<Link
																	href={el}
																	className="underline text-blue-600 hover:text-blue-800"
																>
																	{el}
																</Link>
															</li>
														);
													})}
												</ul>
											</div>
										)}
										<div>
											<h4>Link Deployed </h4>
											<ul className="list-disc px-6">
												{linkDeployed.map((el) => {
													return (
														<li key={el}>
															<Link
																href={el}
																className="underline text-blue-600 hover:text-blue-800"
															>
																{el}
															</Link>
														</li>
													);
												})}
											</ul>
										</div>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeModal}
										>
											Close
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default CardImage;
