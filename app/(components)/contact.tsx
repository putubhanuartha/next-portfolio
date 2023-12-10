"use client";
import { useInView, motion } from "framer-motion";
import React, { FormEvent, useRef } from "react";

const emailRecepient = "putuaryabhanu03@gmail.com";
const emailSubject = "Let's connect !";
const Contact = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.8, once: true });
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name");
		const message = formData.get("message");
		const emailBody = `Greetings, Putu Bhanuartha\n\n${message}\n\nRegards, ${name}`;
		const mailtoLink = `mailto:${emailRecepient}?subject=${encodeURIComponent(
			emailSubject
		)}&body=${encodeURIComponent(emailBody)}`;

		window.location.href = mailtoLink;
	};
	return (
		<section
			ref={ref}
			id="contact"
		>
			<div className="container mx-auto">
				<div className="w-full h-[0.5px] bg-cyan-600"></div>
				<div className="py-8">
					<h1 className="text-2xl text-center">Contact</h1>
					{isInView && (
						<form
							onSubmit={handleSubmit}
							className="max-w-3xl mx-auto flex flex-col gap-y-3"
						>
							<motion.div
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3 }}
								className="flex flex-col gap-y-1"
							>
								<label htmlFor="name">Name</label>
								<input
									required
									placeholder="Name"
									className="py-1.5 px-2 rounded-lg border-2 border-cyan-600 outline-none focus:shadow-xl transition-all duration-150"
									type="text"
									id="name"
									name="name"
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: -100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.3 }}
								className="flex flex-col gap-y-1"
							>
								<label htmlFor="message">Text Message</label>
								<textarea
									rows={5}
									required
									placeholder="Your message here"
									className="py-1.5 px-2 rounded-lg border-2 border-cyan-600 outline-none focus:shadow-xl transition-all duration-150"
									id="message"
									name="message"
								></textarea>
							</motion.div>
							<motion.button
								initial={{ opacity: 0, y: 100 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7 }}
								className="bg-cyan-800 text-white py-1.5 rounded-md hover:bg-cyan-900 transition-colors duration-100"
							>
								Submit
							</motion.button>
						</form>
					)}
				</div>
			</div>
		</section>
	);
};

export default Contact;
