"use client";
import { useState, useSyncExternalStore } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
];

function subscribeToScroll(callback: () => void) {
    window.addEventListener("scroll", callback, { passive: true });
    window.addEventListener("resize", callback);

    return () => {
        window.removeEventListener("scroll", callback);
        window.removeEventListener("resize", callback);
    };
}

function getActiveSection() {
    if (typeof window === "undefined") return "home";

    const scrollPosition = window.scrollY + 220;

    let activeSection = "home";

    const sections = [
        "home",
        "about",
        "skills",
        "education",
        "projects",
        "contact",
    ];

    sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
            const sectionTop =
                section.getBoundingClientRect().top + window.scrollY;

            if (sectionTop <= scrollPosition) {
                activeSection = id;
            }
        }
    });

    return activeSection;
}

function getServerSnapshot() {
    return "home";
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const activeSection = useSyncExternalStore(
        subscribeToScroll,
        getActiveSection,
        getServerSnapshot
    );

    return (
        <header className="sticky top-5 z-50 -mb-[88px] w-full px-4 pt-2 sm:px-6 lg:px-8  container mx-auto">

            <nav className="relative mx-auto flex h-[65px] max-w-[1380px] items-center justify-between rounded-full border border-white/80 bg-[#F3F0E9]/95 px-5 shadow-[0_10px_35px_rgba(21,21,21,0.10)] backdrop-blur-xl sm:px-8">

                {/* Custom Logo */}
                <a
                    href="#home"
                    aria-label="Nirob Home"
                    className="flex shrink-0 items-center gap-3"
                >
                    <svg
                        viewBox="0 0 50 48"
                        className="h-10 w-10"
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
                            stroke="#151515"
                            strokeWidth="8.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <span className="text-[23px] font-extrabold tracking-tight text-[#151515]">
                        Nirob
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-7 lg:flex xl:gap-9">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;

                        return (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                aria-current={isActive ? "location" : undefined}
                                className={`relative py-2 text-[14px] font-bold transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-[#B88932] after:transition-transform after:duration-300 ${isActive
                                    ? "text-[#8A5B16] after:scale-x-100"
                                    : "text-[#45413B] after:scale-x-0 hover:text-[#8A5B16] hover:after:scale-x-100"
                                    }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>

                {/* Contact Button */}
                <a
                    href="#contact"
                    aria-current={
                        activeSection === "contact" ? "location" : undefined
                    }
                    className={`hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A344] via-[#B88932] to-[#9A671C] px-6 py-3 text-sm font-bold text-black shadow-md shadow-[#B88932]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#B88932]/30 lg:inline-flex ${activeSection === "contact"
                        ? "ring-2 ring-[#8A5B16]/40 ring-offset-2"
                        : ""
                        }`}
                >
                    Contact Me
                    <ArrowUpRight size={18} />
                </a>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={isOpen}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B88932]/30 text-[#151515] transition-colors hover:bg-[#B88932]/10 lg:hidden"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="absolute left-4 right-4 top-[92px] rounded-2xl border border-[#B88932]/20 bg-[#F3F0E9] p-4 shadow-xl lg:hidden">

                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;

                            return (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className={`rounded-lg border-l-[3px] px-4 py-3 text-sm font-semibold transition-colors ${isActive
                                        ? "border-[#B88932] bg-[#B88932]/10 text-[#8A5B16]"
                                        : "border-transparent text-[#45413B] hover:bg-[#B88932]/10"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}

                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4A344] to-[#9A671C] px-5 py-3 font-bold text-white"
                        >
                            Contact Me
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
