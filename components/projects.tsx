import { useState } from "react";
import Image from "next/image";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const projects = [
	{
		id: 1,
		number: "01",
		title: "Trivia Spirit ",
		description:
			"A full-stack, image-based trivia game where players compete across anime, sports, science, and geography categories. Features dynamic question boards by difficulty, perks like Double Points and Reroll, real-time team tracking, and offline play. Built with Django, PostgreSQL, Cloudflare R2, and Next.js + TypeScript for fast, scalable performance with image deduplication, caching, and global subscriptions.",
		tech: "Next.js, TypeScript, Redux , Django REST Framework, PostgreSQL, Cloudflare R2, Tailwind CSS",
		image: "/imgs/6.jpeg",
		live: "#",
		github: "https://github.com/Mohcen56/Brainigo_backend",
	},
	{
		id: 2,
		number: "02",
		title: "Exam Management App",
		description:
			"A web application for managing student resit exam declarations, eligibility, grade uploads, and faculty announcements — built with Django.",
		tech: "Html 5, Css 3, Javascript, Django, PostgreSQL",
		image: "/imgs/1.png",
		live: "#",
		github: "https://github.com/Mohcen56/Exam-management-system",
	},
	{
		id: 3,
		number: "03",
		title: "This portfolio",
		description: "Backend project description goes here.",
		tech: "react(Next.js), Tailwind CSS,typescript ",
		image: "/imgs/4.jpeg",
		live: "#",
		github: "#",
	},
	{
		id: 4,
		number: "04",
		title: "E-commerce Website",
		description:
			" created an e-commerce auction platform similar to eBay. Users can post their items for auction, bid on listings, leave comments, and add listings to their watchlist for tracking.",
		tech: "Html 5, Css 3, Javascript, Django",
		image: "/imgs/2.png",
		live: "#",
		github: "https://github.com/Mohcen56/commerce",
	},
	{
		id: 5,
		number: "05",
		title: "EMS",
		description:
			"Developed an employee management system with role-based access . Admins manage employees, track attendance, and process salaries, while employees can view pay slips, mark attendance, and access personal records. The system includes unique login credentials and a responsive interface for seamless use.",
		tech: "Html 5, Css 3, Javascript, PHP, MySQL",
		image: "/imgs/3.png",
		live: "/report.pdf",
		github: "#",
	},
	
	// Add more projects here
];

export default function Projects() {
	const [current, setCurrent] = useState(0);

	const handlePrev = () => {
		setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
	};

	const project = projects[current];

	return (
		<section className="min-h-screen w-full flex flex-col items-center gap-8 px-2 py-8 sm:px-4 md:px-8 rounded-2xl">
			<div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl">
				{/* Left: Project Info */}
				<div className="flex-1 flex flex-col justify-start w-full md:w-1/2 mt-2">
					<div className="text-5xl sm:text-7xl md:text-[30px] lg:text-[80px] leading-none mb-2 text-outline-solid font-mono">
						{project.number}
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white !mb-4 !text-left">
						{project.title}
					</h2>
					<p className="text-gray-400 font-mono !mb-6 text-base sm:text-lg">
						{project.description}
					</p>
					<p className="text-[var(--skin-color)] font-mono !mb-4 text-base sm:text-lg">
						{project.tech}
					</p>
					<hr className="border-gray-700 !mb-4" />
					<div className="flex gap-4 mb-4 justify-start">
						<a
							href={project.live}
							target="_blank"
							rel="noopener noreferrer"
							className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[#232323] hover:bg-[var(--skin-color)] transition-colors"
							title="Live Demo"
						>
							<FaArrowUpRightFromSquare className="text-white text-xl sm:text-2xl" />
						</a>
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[#232323] hover:bg-[var(--skin-color)] transition-colors"
							title="GitHub Repo"
						>
							<FaGithub className="text-white text-xl sm:text-2xl" />
						</a>
					</div>
				</div>
				{/* Right: Project Image & Controls */}
				<div className="flex flex-col items-center gap-4 w-full md:w-1/2">
					<div className="relative mx-auto w-full max-w-[480px] h-[220px] sm:w-[340px] sm:h-[240px] md:w-[400px] md:h-[300px] lg:w-[480px] lg:h-[400px] rounded-xl overflow-hidden">
						<Image
							src={project.image}
							alt={project.title}
							fill
							className="object-cover"
							priority
						/>
					</div>
					<div className="flex gap-2 mt-2 w-full max-w-[480px] mx-auto justify-end">
						<button
							className="w-8 h-8 flex items-center justify-center bg-[var(--skin-color)] rounded hover:bg-[#19c37d] transition-colors"
							onClick={handlePrev}
							aria-label="Previous Project"
						>
							<span className="text-black font-bold text-lg">&lt;</span>
						</button>
						<button
							className="w-8 h-8 flex items-center justify-center bg-[var(--skin-color)] rounded hover:bg-[#19c37d] transition-colors"
							onClick={handleNext}
							aria-label="Next Project"
						>
							<span className="text-black font-bold text-lg">&gt;</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}