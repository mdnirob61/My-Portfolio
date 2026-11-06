import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DiGithub } from "react-icons/di";

const projects = [
    {
        id: "01",
        title: "Kindora",
        category: "Community Service Platform",
        description:
            "A community-driven platform that connects volunteers and event organizers. Discover events, participate in meaningful activities, and organize initiatives that create positive change.",
        image: "/images/projects/kindora/hero.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "MongoDB",
            "Better Auth",
            "shadcn/ui",
            "Node.js",
            "Express.js"
        ],
        live: "https://kindora-ashy.vercel.app/",
        github: "https://github.com/mdnirob61/Kindora",
        slug: "kindora",
    },
    {
        id: "02",
        title: "BazarDor",
        category: "Market Price Tracking Platform",
        description:
            "A digital platform designed to help users explore products and keep track of market prices.",
        image: "/images/projects/bazardor/hero.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
        ],
        live: "https://bajar-dor-six.vercel.app/",
        github: "https://github.com/mdnirob61/Bajar-Dor",
        slug: "bazardor",
    },
    {
        id: "03",
        title: "FitLog",
        category: "Fitness & Workout Platform",
        description:
            "A fitness application that helps users manage their workout activities and track their fitness journey.",
        image: "/images/projects/fitlog/hero.png",
        technologies: [
            "Next.js",
            "React",
            "Tailwind CSS",
        ],
        live: "https://fit-log-seven-phi.vercel.app/",
        github: "https://github.com/mdnirob61/Fit-Log",
        slug: "fitlog",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative isolate overflow-hidden px-5 py-13 sm:px-8 lg:px-12 mt-5"
        >
            {/* Section Background Design */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                {/* Soft Golden Glows */}
                <div className="absolute -right-40 top-10 h-[400px] w-[400px] rounded-full bg-[#D4A344]/8 blur-[130px]" />

                <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#B88932]/8 blur-[120px]" />

                {/* Subtle Decorative Rings */}
                <div className="absolute -right-24 top-24 h-[300px] w-[300px] rounded-full border border-[#B88932]/10" />

                <div className="absolute -right-12 top-36 h-[220px] w-[220px] rounded-full border border-[#B88932]/8" />

                {/* Light Dot Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage: "radial-gradient(#8A5B16 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>
            <div className="mx-auto w-full max-w-[1200px]">

                {/* Section Heading */}
                <div className="mb-8 text-center">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#8A5B16]">
                        My Recent Work
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-[#211F1B] sm:text-5xl">
                        Featured Projects<span className="text-[#B88932]">.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6F685D] sm:text-base">
                        A selection of projects that reflect my learning,
                        creativity, and passion for building meaningful web
                        applications.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#B88932]/20 bg-[#211F1B] transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A344]/60 hover:shadow-xl hover:shadow-[#8A5B16]/10"
                        >
                            {/* Project Image */}
                            <div className="relative aspect-[13/8] overflow-hidden bg-[#151515]">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} website screenshot`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                <div className="absolute left-4 top-4 rounded-full border border-[#D4A344]/40 bg-[#151515]/80 px-3 py-1 text-xs font-medium text-[#D4A344] backdrop-blur-sm">
                                    {project.category}
                                </div>
                            </div>

                            {/* Project Information */}
                            <div className="flex flex-1 flex-col px-6 py-4">

                                <div className="mb-3 flex items-center justify-between">
                                    <span className="text-sm font-medium text-[#D4A344]">
                                        Project {project.id}
                                    </span>

                                    <span className="h-px flex-1 mx-4 bg-[#D4A344]/20" />
                                </div>

                                <h3 className="text-2xl font-bold text-[#F3F0E9]">
                                    {project.title}
                                </h3>

                                <p className="mt-1 min-h-[140px] text-sm leading-7 text-[#B9B2A6]">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md border border-[#D4A344]/20 bg-[#D4A344]/5 px-2.5 py-1 text-xs text-[#D4A344]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="mt-auto flex items-center justify-between border-t border-[#D4A344]/15 pt-5">

                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4A344] transition-colors hover:text-[#F3F0E9]"
                                    >
                                        View Details
                                        <ArrowUpRight size={16} />
                                    </Link>

                                    <div className="flex items-center gap-3">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Visit ${project.title} live website`}
                                            className="text-[#B9B2A6] transition-colors hover:text-[#D4A344]"
                                        >
                                            <ArrowUpRight size={19} />
                                        </a>

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${project.title} GitHub repository`}
                                            className="text-[#B9B2A6] transition-colors hover:text-[#D4A344]"
                                        >
                                            <DiGithub size={19} />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}