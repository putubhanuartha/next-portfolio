import { IconType } from 'react-icons';
import {
	FaCss3,
	FaDocker,
	FaGithub,
	FaHtml5,
	FaInstagram,
	FaJava,
	FaJs,
	FaLaravel,
	FaLinkedin,
	FaMedium,
	FaNodeJs,
	FaPhp,
	FaReact,
	FaTwitter,
} from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import { CardDescriptionProps } from './components/card-description';
import { CardImageProps } from './components/card-image';

export const listNav: { link: string; title: string }[] = [
	{ link: '#about', title: 'About' },
	{ link: '#contact', title: 'Contact' },
	{ link: '#experience', title: 'Experience' },
	{ link: '#portfolio', title: 'Portfolio' },
	{ link: 'https://medium.com/@putuaryabhanu03', title: 'Blog' },
];

// About Me section

// about me paragraph
export const aboutMeData = () => {
	const aboutMe = `A student of Information Systems at Brawijaya University with a passion for software development, particularly web development.  A constant learner, eager for technological advancements and actively involved in project implementation. Deeply interested in crafting user interfaces with third-party libraries such as React Js, adhering to design principles and best practices and also building and integrating microservices with some backend framework.`;
	// social
	const socials: { link: string; icon: IconType; style: string }[] = [
		{
			link: 'https://www.linkedin.com/in/putu-gde-arya-bhanuartha-a65178248',
			style: 'text-cyan-700 hover:text-cyan-900',
			icon: FaLinkedin,
		},
		{
			icon: FaMedium,
			link: 'https://medium.com/@putuaryabhanu03',
			style: 'text-cyan-900 hover:text-black',
		},
		{
			icon: FaTwitter,
			link: 'https://twitter.com/stackontheflow',
			style: 'text-cyan-400 hover:text-cyan-500',
		},
		{
			icon: FaInstagram,
			link: 'https://www.instagram.com/putu_arrtha',
			style: 'text-cyan-700  hover:text-cyan-900',
		},
		{
			link: 'https://github.com/putubhanuartha',
			icon: FaGithub,
			style: 'text-cyan-900  hover:text-cyan-700',
		},
	];
	// skills tech
	const techSkills: { icon: IconType; color: string }[] = [
		{ icon: FaHtml5, color: 'text-orange-600' },
		{ icon: FaCss3, color: 'text-blue-600' },
		{ icon: FaJs, color: 'text-yellow-400' },
		{ icon: FaNodeJs, color: 'text-green-600' },
		{ icon: FaPhp, color: 'text-purle-700' },
		{ icon: FaReact, color: 'text-blue-400' },
		{ icon: FaJava, color: 'text-red-600' },
		{ icon: FaDocker, color: 'text-blue-400' },
		{ icon: FaLaravel, color: 'text-red-500' },
		{ icon: IoLogoFirebase, color: 'text-yellow-400' },
	];

	return { aboutMe, socials, techSkills };
};

// My Experience section
export const myExperienceData = () => {
	// Education
	const educations: CardDescriptionProps[] = [
		{
			from: 'August 2021',
			tag: 'Bachelor of Information Systems',
			title: 'Brawijaya University',
			valueDesc: 'GPA: 3.88 / 4.00',
			linkFile: '/file/nilai.pdf',
			until: 'Present',
		},
	];
	// Work & Teaching asisstant
	const workTeachings: CardDescriptionProps[] = [
		{
			from: 'Oct 2023',
			tag: 'Frontend Engineer Intern',
			title: 'DOT Indonesia',
			linkFile: '/file/dot-certificate.png',
			valueDesc: 'Description',
			listDescription: [
				`Building a monolith application using Inertia as an interface to connect Nest Js backend 
application with React Js client application without using any API endpoint routing. `,
				`Building monolith CRM application using Inertia as an interface to connect Laravel backend 
application with React Js application. `,
				`Working with scrum - agile development method with a development team consisting of 4- 6 
members.`,
			],
			until: 'January 2024',
		},
		{
			from: 'Sep 2023',
			tag: 'Database Administration Laboratory Assistant',
			title: 'Faculty of Computer Science (FILKOM) University of Brawijaya',
			linkFile: '/file/assistant.jpeg',
			valueDesc: 'Description',
			until: 'Dec 2023',
			listDescription: [
				`Teaching and assisting 42 information technology major students in database administration 
practicum course and 90% them acquiring A grade `,
				`Teaching curriculum consisting of HADR (High Availability Disaster Recovery) , database 
migration, database backup and recovery, database security, and advanced database objects. `,
			],
		},
		{
			tag: 'Frontend Developer Intern',
			title: 'Core Initiative Studio Project-Based Internship',
			from: 'Aug 2023',
			until: 'Sep 2023',
			linkFile : '/file/core-initiative.jpeg',
			listDescription: [
				`Design slicing from Figma into HTML, CSS, and Javascript with atomic design principle`,
				`Utilizing Vue Js library with javascript and consuming API with Axios library. `,
				`Deploying frontend application into Firebase Hosting with Docker. `,
			],
			valueDesc: `Description`,
		},
		{
			from: 'Feb 2024',
			linkFile : '/file/suitmedia.jpeg',
			tag: 'Frontend Developer Intern',
			title: 'PT Suitmedia Kreasi Indonesia',
			valueDesc: 'Description',
			listDescription: [
				`Slicing UI from figma into web application using Vue JS with Nuxt Js Framework`,
				`Building components UI for reusable workflow`,
				`Integrate API from Backend services including authentication and authorization `,
				`Build animation parallax using GSAP 3`,
			],
		},
		{
			from: 'Jul 2024',
			tag: 'Frontend Developer Intern',
			title: 'PT Sekawan Media Informatika',
			valueDesc: `Description`,
			listDescription: [
				`Slicing UI from figma into web application using React.Js using Next.Js  `,
				`Optimization of Next.Js Application using Next Analyzer`,
				`Integration API with backend application  `,
				`Optimization of data fetching method that being used in application`,
				`Design revision of couple components and application flow  `,
			],
		},
	];
	// Organization and volunteer
	const organizationVolunteers: CardDescriptionProps[] = [
		{
			from: 'Mar 2022',
			tag: 'Homeband Division Staff, Experts Staff',
			title: 'BIOS (Badan Internal Olahraga dan Seni) FILKOM UB',
			valueDesc: 'Description',
			linkFile: '/file/staff_homeband.pdf',
			until: 'Feb 2023',
			listDescription: ['Band Manager', 'Managing recording session'],
		},
		{
			title: 'LO EVENT GEMASTIK XVI',
			from: 'Sept 2023',
			until: 'Sept 2023',
			tag: 'Public Relation Staff, Volunteer GEMASTIK XVI',
			valueDesc: 'Description',
			listDescription: [
				'Communicate with event talent in opening ceremony of the event',
				'Coordinating with contestants of the competitions',
			],
			linkFile: '/file/humas_gemastik.pdf',
		},
		{
			title: 'KBMSI FILKOM UB',
			from: 'Jun 2022',
			until: 'Nov 2022',
			tag: 'Fundraiser and Finance Staff, Volunteer WOW SI 2022',
			valueDesc: 'Description',
			listDescription: [
				'Managing finance and source of income at WOW SI 2022',
				'Managing distribution of consumption during the event',
				'Communicate with treasurer about event finance',
			],
			linkFile: '/file/staff_wowsi.pdf',
		},
		{
			from: 'Jun 2022',
			tag: 'Public Relation Staff, Volunteer ORMABA 2022',
			title: 'UNIKAHIDHA UB',
			until: 'Oct 2022',
			valueDesc: 'Description',
			listDescription: [
				'Managing mailing and communicate with external parties',
				'Making documentation video and photo',
				'Managing social media content for the event',
			],
		},
		{
			from: 'Apr 2021',
			tag: 'Secretary and Mailing Staff, Volunteer HBCC 2022',
			title: 'UNIKAHIDHA UB',
			until: 'Jul 2021',
			valueDesc: 'Description',
			listDescription: [
				'Managing mailing with secretary and public relation division',
			],
		},
	];
	// Awards
	const awards: CardDescriptionProps[] = [
		{
			title: 'HIMATEKKOM UB',
			from: 'Nov 2022',
			tag: '2nd Place IoT IDE-LITE 2022',
			valueDesc: 'IoT Competition',
			linkFile: '/file/iot_competition.png',
		},
	];
	return { educations, workTeachings, organizationVolunteers, awards };
};

// My Portfolio section
export const portfolios: CardImageProps[] = [
	{
		urlImage: '/portfolio/gala.png',
		linkRepo: ['https://github.com/putubhanuartha/gala-website-client'],
		tag: 'Next Js, React Js, Framer Motion',
		title: 'GALA 55 Concert Ticket Website',
		linkDeployed: ['https://gala-website-client.vercel.app'],
	},
	{
		urlImage: '/portfolio/web-desa.png',
		linkRepo: ['https://github.com/putubhanuartha/website-desa-client'],
		tag: 'React Js, Framer Motion, Chart Js',
		title: 'Website Desa Sidorejo Client Application',
		linkDeployed: ['https://website-desa-client-ashen.vercel.app'],
	},
	{
		urlImage: '/portfolio/pomodoro.png',
		tag: 'React Js, Vite Js',
		title: 'Pomodoro Application with LOFI Music',
		linkRepo: ['https://github.com/putubhanuartha/pomodoro-app'],
		linkDeployed: ['https://pomodoro-app-jade.vercel.app/'],
	},
	{
		urlImage: '/portfolio/dot-quiz.png',
		tag: 'Express Js, MYSQL, Next Js',
		title: 'DOT Quizz Application',
		linkRepo: [
			'https://github.com/putubhanuartha/client-dot-quiz',
			'https://github.com/putubhanuartha/server-dot-quiz',
		],
		dockerDownload: {
			linkDownload:
				'https://drive.google.com/file/d/1oCW4Z73Kp8QHTilI899ikWwQ5CD-Fiva/view?usp=sharing',
			videoLink:
				'https://drive.google.com/file/d/1BisU8PNEVQYY8vwaTDTEkrfu0564F_hj/view?usp=sharing',
		},
	},
	{
		urlImage: '/portfolio/e-vote.png',
		linkRepo: [
			'https://github.com/putubhanuartha/e-vote-admin',
			'https://github.com/putubhanuartha/e-vote-warga',
			'https://github.com/putubhanuartha/e-vote-main-server',
		],
		tag: 'Next Js, Node Js, MySQL',
		title: 'Fullstack E-Vote Application',
		dockerDownload: {
			linkDownload:
				'https://drive.google.com/file/d/1lVQlOaD3tdurmK_iTspWXk7hEw3lNd9M/view?usp=sharing',
			videoLink:
				'https://drive.google.com/file/d/1BisU8PNEVQYY8vwaTDTEkrfu0564F_hj/view?usp=sharing',
		},
	},
];
