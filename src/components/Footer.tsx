import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-[#11110F] border-t border-[#B88932]/30">
            <div className="max-w-[1200px] mx-auto px-5">

                {/* Main Footer */}
                <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <a
                            href="#home"
                            aria-label="Nirob Home"
                            className="inline-flex items-center gap-3"
                        >
                            <svg
                                viewBox="0 0 50 48"
                                className="h-11 w-11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 37L17 10"
                                    stroke="#B88932"
                                    strokeWidth="8.5"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M17 10L34 37L43 10"
                                    stroke="#F3F0E9"
                                    strokeWidth="8.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <span className="relative bg-gradient-to-r from-[#F3F0E9] via-[#D4A344] to-[#B88932] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
                                Nirob
                                <span className="text-[#D4A344]">.</span>
                                {/* Gold Brush Underline */}
                                <svg
                                    viewBox="0 0 150 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute -bottom-2 left-0 h-3 w-full overflow-visible"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M2 10C32 5 65 4 92 7C112 9 128 10 147 6"
                                        stroke="#B88932"
                                        strokeWidth="2.8"
                                        strokeLinecap="round"
                                    />

                                    <path
                                        d="M65 13C88 9 112 9 132 11"
                                        stroke="#D4A344"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </a>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-[#A8A29E]">
                            A passionate developer focused on building meaningful,
                            user-friendly digital experiences through modern web technologies.
                        </p>

                        <p className="mt-6 text-xs tracking-widest uppercase text-[#D4A344]">
                            Building ideas into reality.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[2px] text-[#F3F0E9]">
                            Explore
                        </h3>

                        <div className="flex flex-col gap-4">
                            {[
                                { name: "Home", href: "#home" },
                                { name: "About", href: "#about" },
                                { name: "Skills", href: "#skills" },
                                { name: "Projects", href: "#projects" },
                                { name: "Contact", href: "#contact" },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="w-fit text-sm text-[#A8A29E] transition-colors hover:text-[#D4A344]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[2px] text-[#F3F0E9]">
                            Let&apos;s Connect
                        </h3>

                        <a
                            href="mailto:nirobstudy2004@gmail.com"
                            className="group flex items-center gap-2 text-sm text-[#A8A29E] transition-colors hover:text-[#D4A344]"
                        >
                            <Mail size={17} />
                            nirobstudy2004@gmail.com
                            <ArrowUpRight
                                size={14}
                                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </a>

                        <div className="mt-7 flex items-center gap-3">
                            <a
                                href="https://github.com/mdnirob61"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B88932]/30 text-[#A8A29E] transition-all hover:border-[#D4A344] hover:bg-[#D4A344]/10 hover:text-[#D4A344]"
                            >
                                <BsGithub size={18} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/md-toukir-uz-zaman-nirob/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B88932]/30 text-[#A8A29E] transition-all hover:border-[#D4A344] hover:bg-[#D4A344]/10 hover:text-[#D4A344]"
                            >
                                <BsLinkedin size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">
                    <p className="text-xs text-[#77736D]">
                        © 2026 Md Toukir Uz Zaman Nirob. All rights reserved.
                    </p>

                    <a
                        href="#home"
                        className="text-xs font-medium tracking-wide text-[#D4A344] transition-colors hover:text-[#F3F0E9]"
                    >
                        BACK TO TOP ↑
                    </a>

                    <p className="text-xs text-[#77736D]">
                        Designed & Developed with care.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;