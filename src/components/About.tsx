import {
    ArrowUpRight,
    Code2,
    Lightbulb,
    Target,
} from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#F3F0E9] px-5 py-13 sm:px-8 lg:px-12 rounded-2xl mt-10"
        >
            {/* Section Background Design */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Base Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F3F0E9] via-[#F8F5EF] to-[#EDE7DA]" />

                {/* Golden Glow */}
                <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#D4A344]/15 blur-[110px]" />

                <div className="absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#B88932]/10 blur-[100px]" />

                {/* Diagonal Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(135deg, #8A5B16 0px, #8A5B16 1px, transparent 1px, transparent 35px)",
                    }}
                />

                {/* Large Decorative Circle */}
                <div className="absolute -right-40 top-[25%] h-125 w-125 rounded-full border border-[#B88932]/15" />

                <div className="absolute -right-28 top-[30%] h-95 w-95 rounded-full border border-[#B88932]/10" />

                {/* Gold Corner Accent */}
                <div className="absolute left-0 top-0 h-40 w-40 rounded-br-full border-b border-r border-[#B88932]/15" />

                {/* Small Decorative Dots */}
                <div className="absolute left-[8%] top-[45%] grid grid-cols-4 gap-3 opacity-25">
                    {Array.from({ length: 16 }).map((_, index) => (
                        <span
                            key={index}
                            className="h-1.5 w-1.5 rounded-full bg-[#B88932]"
                        />
                    ))}
                </div>

            </div>
            <div className="relative z-10 mx-auto max-w-300">

                {/* Section Heading */}
                <div className="relative mb-6">

                    {/* Background Decorations */}
                    <div className="pointer-events-none absolute -left-16 -top-12 h-36 w-36 rounded-full border border-[#B88932]/15" />

                    <div className="pointer-events-none absolute -left-10 -top-6 h-24 w-24 rounded-full bg-[#B88932]/5 blur-2xl" />

                    <div className="pointer-events-none absolute right-10 top-0 h-28 w-28 rounded-full bg-[#D4A344]/10 blur-3xl" />

                    {/* Heading Content */}
                    <div className="relative z-10">

                        {/* Eyebrow */}
                        <div className="mb-2 flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-gradient-to-r from-[#8A5B16] to-[#D4A344]" />

                            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#8A5B16]">
                                Get To Know Me
                            </p>

                            <span className="rounded-full border border-[#B88932]/30 bg-[#B88932]/10 px-3 py-1 text-[10px] font-bold tracking-widest text-[#8A5B16]">
                                01
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#151515] sm:text-5xl lg:text-6xl">
                            About{" "}
                            <span className="relative inline-block bg-gradient-to-r from-[#8A5B16] via-[#B88932] to-[#D4A344] bg-clip-text text-transparent">
                                Me.

                                {/* Gold Underline */}
                                <svg
                                    viewBox="0 0 130 12"
                                    fill="none"
                                    className="absolute -bottom-2 left-0 w-full"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M3 8C35 2 85 2 127 7"
                                        stroke="#B88932"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h2>

                        {/* Subtitle */}
                        <p className="mt-4 max-w-xl text-sm leading-7 text-[#68635C] sm:text-base">
                            A glimpse into my journey, creative mindset, and passion
                            for turning ideas into meaningful digital experiences.
                        </p>

                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">

                    {/* Introduction Card - Dark */}
                    <div className="relative overflow-hidden rounded-3xl border border-[#B88932]/20 bg-[#151515] p-7 text-white shadow-xl sm:p-10">

                        {/* Decorative Circle */}
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#B88932]/20" />

                        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#B88932]/15" />

                        <div className="relative z-10">

                            <span className="inline-block rounded-full border border-[#B88932]/30 bg-[#B88932]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#D4A344]">
                                01 / Introduction
                            </span>

                            <h3 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                                Turning ideas into
                                <span className="text-[#D4A344]"> meaningful </span>
                                digital experiences.
                            </h3>

                            <p className="mt-6 text-sm leading-8 text-[#C5C0B7] sm:text-base">
                                <span className="font-semibold text-xl text-[#D4A344]">I&apos;m Md Toukir Uz Zaman Nirob,</span> a developer passionate
                                about creating modern, responsive, and user-friendly
                                web applications.
                            </p>

                            <p className="mt-2 text-sm leading-8 text-[#C5C0B7] sm:text-base">
                                My interest in development comes from my love for
                                design, curiosity about how things work, and the
                                satisfaction of solving problems.
                            </p>

                            <a
                                href="#projects"
                                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#B88932] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8A5B16]"
                            >
                                Explore My Projects
                                <ArrowUpRight size={18} />
                            </a>

                        </div>
                    </div>

                    {/* Highlight Cards */}
                    <div className="grid gap-6">

                        {/* Creative Mindset */}
                        <div className="group rounded-3xl border border-[#B88932]/20 bg-[#211F1B] p-7 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#B88932]/50">

                            <div className="flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B88932]/15 text-[#D4A344]">
                                    <Lightbulb size={25} />
                                </div>

                                <span className="text-sm font-bold text-[#B88932]">
                                    02
                                </span>
                            </div>

                            <h4 className="mt-6 text-xl font-bold">
                                Creative Mindset
                            </h4>

                            <p className="mt-3 text-sm leading-7 text-[#B7B2A9]">
                                I enjoy exploring ideas, designing interfaces,
                                and transforming concepts into functional
                                digital experiences.
                            </p>
                        </div>

                        {/* Problem Solving */}
                        <div className="group rounded-3xl border border-[#B88932]/20 bg-[#211F1B] p-7 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#B88932]/50">

                            <div className="flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B88932]/15 text-[#D4A344]">
                                    <Code2 size={25} />
                                </div>

                                <span className="text-sm font-bold text-[#B88932]">
                                    03
                                </span>
                            </div>

                            <h4 className="mt-6 text-xl font-bold">
                                Problem Solver
                            </h4>

                            <p className="mt-3 text-sm leading-7 text-[#B7B2A9]">
                                I break complex tasks into smaller steps,
                                understand the logic, and work through
                                challenges one by one.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Bottom Cards */}
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Projects */}
                    <div className="rounded-3xl border border-[#B88932]/20 bg-white/70 p-7">
                        <Code2 className="text-[#B88932]" size={28} />

                        <h4 className="mt-5 text-xl font-bold text-[#151515]">
                            My Projects
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-[#68635C]">
                            Exploring ideas and building projects like
                            Kindora, BazarDor, Dev Stack, and FitLog.
                        </p>
                    </div>

                    {/* Interests */}
                    <div className="rounded-3xl border border-[#B88932]/20 bg-white/70 p-7">
                        <Lightbulb className="text-[#B88932]" size={28} />

                        <h4 className="mt-5 text-xl font-bold text-[#151515]">
                            Beyond Coding
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-[#68635C]">
                            Outside development, I enjoy playing football
                            and cricket.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="rounded-3xl bg-gradient-to-br from-[#B88932] to-[#8A5B16] p-7 text-white">
                        <Target size={28} />

                        <h4 className="mt-5 text-xl font-bold">
                            My Vision
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-white/85">
                            To build larger software projects, collaborate
                            with great teams, and grow as a developer.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}