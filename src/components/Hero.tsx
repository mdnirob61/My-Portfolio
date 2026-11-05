
import {
    ArrowDown,
    ArrowUpRight,
    Mail,
} from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative isolate overflow-hidden bg-[#F3F0E9] text-[#151515] lg:h-[730px] lg:min-h-[730px]"
        >
            {/* Desktop Background */}
            <div
                aria-hidden="true"
                className="absolute inset-0 z-0 hidden bg-no-repeat lg:block"
                style={{
                    backgroundImage: "url('/images/hero-bg-1.png')",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                }}
            />

            {/* Hero Content */}
            <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-0 px-5 pt-28 sm:px-8 sm:pt-32 lg:h-full lg:grid-cols-[1.1fr_0.9fr] lg:gap-4 lg:px-12 lg:pt-24 lg:pb-10">

                {/* LEFT CONTENT */}
                <div className="relative z-10 w-full max-w-[620px] py-10 sm:py-12 lg:py-0">

                    {/* Greeting */}
                    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#B88932]/20 bg-[#B88932]/10 px-5 py-2.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#B88932]" />

                        <span className="text-sm font-bold text-[#8A5B16]">
                            Hello, I'm
                        </span>
                    </div>

                    {/* Name */}
                    <h1 className="font-extrabold leading-[1.02] tracking-[-0.055em]">

                        <span className="block text-[clamp(2rem,3.5vw,3.5rem)] xl:whitespace-nowrap">
                            Md Toukir Uz Zaman
                        </span>

                        <span className="mt-2 block">
                            <span className="relative inline-block pb-4">

                                <span className="bg-gradient-to-r from-[#8A5B16] via-[#B88932] to-[#D4A344] bg-clip-text text-[clamp(4.5rem,7vw,6rem)] font-extrabold text-transparent">
                                    Nirob
                                </span>

                                <span className="text-[#151515] text-[clamp(4.5rem,7vw,6rem)]">
                                    .
                                </span>

                                {/* Gold Brush Underline */}
                                <svg
                                    viewBox="0 0 320 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-0 left-[12%] h-4 w-[92%] overflow-visible"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M3 15C65 7 145 4 215 9C245 11 270 13 303 9"
                                        stroke="#B88932"
                                        strokeWidth="3.5"
                                        strokeLinecap="round"
                                    />

                                    <path
                                        d="M135 19C180 13 232 13 270 16"
                                        stroke="#D4A344"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />
                                </svg>

                            </span>
                        </span>

                    </h1>

                    {/* Designation */}
                    <div className="mt-5 flex items-center gap-3">
                        <span className="h-8 w-1 shrink-0 rounded-full bg-[#B88932]" />

                        <h2 className="flex flex-wrap items-center gap-x-2 text-base font-bold text-[#393939] sm:text-lg xl:text-xl">
                            <span>Frontend Developer</span>
                            <span className="text-[#B88932]">|</span>
                            <span>Full Stack Developer</span>
                        </h2>
                    </div>

                    {/* Introduction */}
                    <p className="mt-5 max-w-[560px] text-sm leading-7 text-[#68635C] sm:text-base">
                        I build modern, responsive web applications—from polished
                        user interfaces to full-stack functionality. I enjoy
                        turning ideas into useful products and solving real
                        problems with clean, thoughtful code.
                    </p>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">

                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#D4A344] via-[#B88932] to-[#8A5B16] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#B88932]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-7"
                        >
                            Explore My Work

                            <ArrowUpRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-xl border border-[#151515]/70 bg-[#F3F0E9]/70 px-5 py-3.5 text-sm font-bold text-[#151515] transition-all duration-300 hover:border-[#B88932] hover:bg-[#151515] hover:text-white sm:px-7"
                        >
                            Let's Talk
                        </a>

                    </div>

                    {/* Social Links */}
                    <div className="mt-7 flex items-center gap-4 pb-7 lg:pb-0">

                        <a
                            href="https://github.com/mdnirob61"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#151515]/5 bg-white/80 text-[#151515] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-[#B88932]"
                        >
                            <FaGithub size={22} />
                        </a>

                        <a
                            href="mailto:your-email@example.com"
                            aria-label="Email"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#151515]/5 bg-white/80 text-[#151515] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-[#B88932]"
                        >
                            <Mail size={21} />
                        </a>

                    </div>

                </div>

                {/* RIGHT PROFILE AREA */}
                <div className="relative -mx-5 flex min-h-[360px] items-end justify-center overflow-hidden bg-[#151515] sm:-mx-8 sm:min-h-[420px] lg:mx-0 lg:min-h-[500px] lg:overflow-visible lg:bg-transparent">

                    {/* Decorative Circle */}
                    {/* <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B88932]/50 sm:h-[340px] sm:w-[340px] lg:h-[430px] lg:w-[430px]" /> */}

                    {/* Golden Glow */}
                    <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B88932]/10 blur-3xl" />

                    {/* Profile Image */}
                    <div className="relative z-10 h-[340px] w-full max-w-[380px] sm:h-[400px] lg:h-[460px] lg:max-w-[460px]">

                        <Image
                            src="/images/my-photo.png"
                            alt="Md Toukir Uz Zaman Nirob"
                            fill
                            priority
                            sizes="(max-width: 640px) 90vw, 460px"
                            className="object-contain object-bottom drop-shadow-2xl"
                        />

                    </div>

                    {/* Floating Label */}
                    <div className="absolute bottom-4 right-3 z-20 rounded-xl border border-[#B88932]/30 bg-[#211F1B]/95 px-4 py-3 shadow-xl sm:right-6 lg:right-0 lg:bottom-5">

                        <p className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4A344] sm:text-xs">
                            Build · Learn · Create
                        </p>
                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <a
                href="#about"
                aria-label="Scroll to About section"
                className="absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-[#8A5B16] transition-colors hover:text-[#B88932] lg:flex"
            >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                    Scroll Down
                </span>

                <ArrowDown size={18} />
            </a>

        </section>
    );
}
