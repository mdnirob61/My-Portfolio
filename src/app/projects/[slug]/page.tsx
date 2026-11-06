import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowUpRight,
    ExternalLink,
    CheckCircle2,
    Lightbulb,
    Code2,
} from "lucide-react";
import { DiGithub } from "react-icons/di";

const projects = {
    kindora: {
        title: "Kindora",
        subtitle: "Small Acts. Stronger Communities.",
        category: "Community Service Platform",
        number: "01",

        description:
            "Kindora is a full-stack community service platform independently designed and developed to connect volunteers with community event organizers. Users can discover upcoming events, participate in meaningful activities, and organize their own initiatives. The application includes a frontend, backend API, database integration, and secure authentication, providing a complete event management experience.",

        developmentHighlights: [
            {
                title: "Frontend Development",
                description:
                    "Designed and developed a responsive user interface using Next.js, TypeScript, Tailwind CSS, and shadcn/ui.",
            },
            {
                title: "Backend Development",
                description:
                    "Developed backend REST APIs to handle event management, user operations, and application data.",
            },
            {
                title: "Database Integration",
                description:
                    "Integrated MongoDB to store and manage users, events, and participation information.",
            },
            {
                title: "Authentication & Authorization",
                description:
                    "Implemented authentication, JWT verification, and protected access to private application features.",
            },
            {
                title: "Authentication & Authorization",
                description:
                    "Integrated Better Auth for user authentication and session management, and implemented JWT-based verification to secure communication between the Next.js frontend and Express.js backend.",
            },
        ],

        image: "/images/projects/kindora/hero.png",

        projectType: "Full-Stack Web Application",
        role: "Solo Developer",

        screenshots: [
            {
                src: "/images/projects/kindora/events.png",
                title: "Explore Events",
                description:
                    "Discover upcoming community events with search and category filters.",
            },
            {
                src: "/images/projects/kindora/details.png",
                title: "Event Details",
                description:
                    "Explore event information, organizer details, and join community activities.",
            },
            {
                src: "/images/projects/kindora/create.png",
                title: "Create Events",
                description:
                    "Create and organize community service initiatives.",
            },
            {
                src: "/images/projects/kindora/manage.png",
                title: "Manage Events",
                description:
                    "Update and manage events created by the organizer.",
            },
            {
                src: "/images/projects/kindora/signup.png",
                title: "User Registration",
                description:
                    "Create an account to access community event features.",
            },
        ],

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "Better Auth",
            "shadcn/ui",
            "REST API",
            "React Toastify",
        ],

        features: [
            "Discover upcoming community service events.",
            "Search and filter events by category.",
            "View detailed event information and organizers.",
            "Join community events and participate in activities.",
            "Create and organize community service events.",
            "Update and delete personally created events.",
            "Manage joined events.",
            "Email/password and Google authentication.",
            "Responsive design and dark mode.",
        ],

        challenges: [
            "Implementing JWT-based authentication and securely verifying user tokens when communicating with protected backend APIs.",

            "Managing authentication sessions and protecting private routes while ensuring users remain authenticated after refreshing the page.",

            "Building a complete event management system, including event creation, updating, deletion, and ownership verification.",

            "Implementing the event joining system while preventing duplicate participation and maintaining accurate joined-user information.",

            "Connecting the Next.js frontend with the backend REST API and handling asynchronous database operations.",

            "Managing authentication, authorization, and user-specific data across different parts of the application.",

            "Handling API errors and providing meaningful feedback through toast notifications.",

            "Integrating Better Auth for authentication and session management while implementing JWT-based verification to securely communicate with the Express.js backend and protect private API endpoints.",
        ],

        improvements: [
            "Add event reviews and participant feedback.",
            "Introduce event reminders and notifications.",
            "Improve event discovery with location-based filtering.",
            "Add more community engagement features.",
        ],

        live: "https://kindora-ashy.vercel.app/",
        github: "https://github.com/mdnirob61/Kindora",
    },

    bazardor: {
        title: "BazarDor",
        subtitle: "Know Today's Prices. Make Smarter Choices.",
        category: "Market Price Tracking Platform",
        number: "02",

        description:
            "BazarDor is a modern web application that helps users explore daily prices of essential commodities across Bangladesh. Users can browse products, compare market prices, identify price changes, and access detailed price information through a responsive interface.",

        image: "/images/projects/bazardor/hero.png",

        screenshots: [
            {
                src: "/images/projects/bazardor/products.png",
                title: "Daily Market Overview",
                description:
                    "Explore daily commodity prices, trending products, and products with increasing or decreasing prices.",
            },
            {
                src: "/images/projects/bazardor/items.png",
                title: "Product Categories",
                description:
                    "Browse essential products through categories such as vegetables, rice, lentils, oil, fish, and meat.",
            },
            {
                src: "/images/projects/bazardor/details.png",
                title: "Market Price Comparison",
                description:
                    "View minimum, maximum, and average prices alongside market-wise price comparisons.",
            },
            {
                src: "/images/projects/bazardor/profile.png",
                title: "User Profile",
                description:
                    "View account information and update profile details.",
            },
            {
                src: "/images/projects/bazardor/signup.png",
                title: "Authentication",
                description:
                    "Register and access the platform using supported authentication methods.",
            },
        ],

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "DaisyUI",
            "Better Auth",
            "REST API",
            "React Toastify",
            "Vercel",
        ],

        features: [
            "Explore daily prices of essential commodities.",
            "View products through category-based navigation.",
            "Track products with increasing and decreasing prices.",
            "Browse and sort products by price.",
            "Search for products by name and category.",
            "Compare minimum, maximum, and average prices.",
            "Explore market-wise commodity prices.",
            "Register and sign in using email, Google, or GitHub.",
            "View and update user profile information.",
            "Responsive Bengali-first interface.",
            "Light and dark theme support.",
        ],

        challenges: [
            "Integrating REST APIs and handling product and market price data dynamically.",
            "Organizing product information into categories and implementing category-based filtering.",
            "Displaying price increases and decreases clearly so users can understand daily market trends.",
            "Presenting market-wise minimum, maximum, and average prices in an understandable format.",
            "Building a responsive Bengali-language interface while maintaining consistent layouts across different screen sizes.",
        ],

        improvements: [
            "Add interactive price history charts.",
            "Introduce more market locations and price comparisons.",
            "Add price alerts for selected products.",
            "Improve product search and filtering.",
        ],

        live: "https://bajar-dor-six.vercel.app/",
        github: "https://github.com/mdnirob61/Bajar-Dor",
    },

    fitlog: {
        title: "FitLog",
        subtitle: "Track Your Workouts, Build Your Plan.",
        category: "Fitness & Workout Platform",
        number: "03",

        description:
            "FitLog is a beginner-friendly workout tracking application where users can explore different exercises, view detailed workout information, save their favorite workouts, and create personalized workout plans.",

        image: "/images/projects/fitlog/hero.png",

        screenshots: [
            {
                src: "/images/projects/fitlog/details.png",
                title: "Workout Details",
                description:
                    "Explore workout information, including targeted muscle groups, difficulty, duration, ratings, sets, reps, and instructions.",
            },
            {
                src: "/images/projects/fitlog/plan.png",
                title: "My Workout Plan",
                description:
                    "Create and manage a personal workout plan by adding exercises from the workout library.",
            },
        ],

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "React Toastify",
            "Next.js Image",
            "JSON",
        ],

        features: [
            "Browse a collection of workout exercises.",
            "Explore muscle groups, difficulty levels, duration, and ratings.",
            "View detailed workout information and instructions.",
            "Save favorite workouts for later.",
            "Add workouts to a personal workout plan.",
            "Manage saved workouts and personal plans.",
            "Responsive workout library interface.",
        ],

        challenges: [
            "Organizing workout information so users can easily explore exercises and understand their details.",
            "Implementing a system for saving favorite workouts and managing personal workout plans.",
            "Managing workout data and user interactions while keeping the interface responsive.",
            "Designing reusable workout cards and detail layouts for a consistent user experience.",
        ],

        improvements: [
            "Add workout progress tracking.",
            "Introduce weekly and monthly workout statistics.",
            "Add personalized workout recommendations.",
            "Improve workout planning and progress visualization.",
        ],

        live: "https://fit-log-seven-phi.vercel.app/",
        github: "https://github.com/mdnirob61/Fit-Log",
    },
};

type ProjectSlug = keyof typeof projects;

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectDetailsPage({ params, }: ProjectPageProps) {
    const { slug } = await params;

    if (!(slug in projects)) {
        notFound();
    }

    const project = projects[slug as ProjectSlug];

    return (
        <main className="relative min-h-screen overflow-hidden px-5 py-16 sm:px-8 lg:px-12">

            <div className="mx-auto w-full max-w-[1200px]">

                {/* Back Navigation */}
                <Link
                    href="/#projects"
                    className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-[#8A5B16] transition-colors hover:text-[#B88932]"
                >
                    <ArrowLeft size={17} />
                    Back to Projects
                </Link>

                {/* Project Header */}
                <div className="mb-12">

                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#8A5B16]">
                        Project {project.number} / {project.category}
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-[#211F1B] sm:text-6xl">
                        {project.title}
                        <span className="text-[#B88932]">.</span>
                    </h1>

                    <p className="mt-3 text-lg font-medium text-[#8A5B16]">
                        {project.subtitle}
                    </p>

                    <p className="mt-6 max-w-3xl text-sm leading-8 text-[#6F685D] sm:text-base">
                        {project.description}
                    </p>

                    {"projectType" in project && "role" in project && (
                        <div className="mt-6 flex flex-wrap gap-3">
                            <span className="rounded-lg border border-[#B88932]/20 bg-[#B88932]/5 px-4 py-2 text-sm font-medium text-[#8A5B16]">
                                {project.projectType}
                            </span>

                            <span className="rounded-lg border border-[#B88932]/20 bg-[#B88932]/5 px-4 py-2 text-sm font-medium text-[#8A5B16]">
                                {project.role}
                            </span>
                        </div>
                    )}

                    {/* Project Links */}
                    <div className="mt-8 flex flex-wrap gap-4">

                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#B88932] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#8A5B16]"
                        >
                            Live Website
                            <ExternalLink size={17} />
                        </a>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-[#B88932]/40 px-6 py-3 text-sm font-semibold text-[#8A5B16] transition-all hover:bg-[#B88932]/10"
                        >
                            <DiGithub size={18} />
                            Client Repository
                            <ArrowUpRight size={16} />
                        </a>

                    </div>
                </div>

                {/* Main Project Screenshot */}
                <div className="relative mb-20 aspect-[16/9] overflow-hidden rounded-2xl border border-[#B88932]/20 bg-[#211F1B] shadow-xl shadow-[#8A5B16]/10">

                    <Image
                        src={project.image}
                        alt={`${project.title} homepage`}
                        fill
                        priority
                        className="object-contain"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />

                </div>

                {/* Technologies */}
                <section className="mb-20">

                    <div className="mb-8 flex items-center gap-3">
                        <Code2 className="text-[#B88932]" size={25} />

                        <h2 className="text-2xl font-bold text-[#211F1B] sm:text-3xl">
                            Technology Stack
                            <span className="text-[#B88932]">.</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-lg border border-[#B88932]/20 bg-[#B88932]/5 px-4 py-2.5 text-sm font-medium text-[#8A5B16]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                </section>

                {/* Key Features */}
                <section className="mb-20">

                    <h2 className="mb-8 text-2xl font-bold text-[#211F1B] sm:text-3xl">
                        Key Features
                        <span className="text-[#B88932]">.</span>
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-2">

                        {project.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 rounded-xl border border-[#B88932]/15 bg-white/40 p-5"
                            >
                                <CheckCircle2
                                    size={20}
                                    className="mt-0.5 shrink-0 text-[#B88932]"
                                />

                                <p className="text-sm leading-7 text-[#6F685D]">
                                    {feature}
                                </p>
                            </div>
                        ))}

                    </div>

                </section>

                {/* Project Screenshots */}
                {project.screenshots.length > 0 && (
                    <section className="mb-20">

                        <h2 className="mb-8 text-2xl font-bold text-[#211F1B] sm:text-3xl">
                            Project Showcase
                            <span className="text-[#B88932]">.</span>
                        </h2>

                        <div className="grid gap-8 md:grid-cols-2">

                            {project.screenshots.map((screenshot) => (
                                <div
                                    key={screenshot.title}
                                    className="group overflow-hidden rounded-2xl border border-[#B88932]/20 bg-[#211F1B]"
                                >

                                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-[#151515]">

                                        <Image
                                            src={screenshot.src}
                                            alt={screenshot.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />

                                    </div>

                                    <div className="p-6">

                                        <h3 className="text-lg font-semibold text-[#F3F0E9]">
                                            {screenshot.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-7 text-[#B9B2A6]">
                                            {screenshot.description}
                                        </p>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </section>
                )}

                {/* Challenges */}
                {project.challenges.length > 0 && (
                    <section className="mb-20">

                        <div className="mb-8 flex items-center gap-3">
                            <Code2 className="text-[#B88932]" size={25} />

                            <h2 className="text-2xl font-bold text-[#211F1B] sm:text-3xl">
                                Development Challenges
                                <span className="text-[#B88932]">.</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {project.challenges.map((challenge, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl border border-[#B88932]/15 bg-white/40 p-5"
                                >
                                    <p className="text-sm leading-7 text-[#6F685D]">
                                        {challenge}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </section>
                )}

                {/* Future Improvements */}
                <section className="mb-20">

                    <div className="mb-8 flex items-center gap-3">
                        <Lightbulb className="text-[#B88932]" size={25} />

                        <h2 className="text-2xl font-bold text-[#211F1B] sm:text-3xl">
                            Future Improvements
                            <span className="text-[#B88932]">.</span>
                        </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">

                        {project.improvements.map((improvement, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 rounded-xl border border-[#B88932]/15 bg-white/40 p-5"
                            >
                                <Lightbulb
                                    size={19}
                                    className="mt-1 shrink-0 text-[#B88932]"
                                />

                                <p className="text-sm leading-7 text-[#6F685D]">
                                    {improvement}
                                </p>
                            </div>
                        ))}

                    </div>

                </section>

                {/* Bottom Navigation */}
                <div className="border-t border-[#B88932]/20 pt-8">

                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#8A5B16] transition-colors hover:text-[#B88932]"
                    >
                        <ArrowLeft size={17} />
                        Explore More Projects
                    </Link>

                </div>

            </div>

        </main>
    );
}