import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiGithub,
    SiVercel,
    SiShadcnui,
    SiBetterauth,
    SiDaisyui,
    SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Code2, Server, Wrench } from "lucide-react";

const frontendSkills = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
];

const backendSkills = [
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "REST API", icon: Server, color: "#D4A344" },
];

const toolSkills = [
    { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
    { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    { name: "shadcn/ui", icon: SiShadcnui, color: "#FFFFFF" },
    { name: "Better Auth", icon: SiBetterauth, color: "#FFFFFF" },
    { name: "DaisyUI", icon: SiDaisyui, color: "#5A0EF8" },
    { name: "HeroUI", icon: Wrench, color: "#D4A344" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "OpenCode", icon: Code2, color: "#D4A344" },
];

function SkillCard({
    title,
    icon: CategoryIcon,
    skills,
}: {
    title: string;
    icon: React.ElementType;
    skills: {
        name: string;
        icon: React.ElementType;
        color: string;
    }[];
}) {
    return (
        <div className="group rounded-2xl border border-[#B88932]/25 bg-[#211F1B] p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#B88932]/60 hover:shadow-xl sm:p-6">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B88932]/15 text-[#D4A344]">
                        <CategoryIcon size={20} />
                    </div>

                    <h3 className="text-lg font-bold text-white sm:text-xl">
                        {title}
                    </h3>
                </div>

                <span className="text-xs font-bold tracking-widest text-[#B88932]">
                    {String(skills.length).padStart(2, "0")}
                </span>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-3">
                {skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.04] px-2 py-2.5 transition-all duration-300 hover:border-[#B88932]/40 hover:bg-[#B88932]/10"
                        >
                            <Icon
                                size={27}
                                style={{ color: skill.color }}
                            />

                            <span className="text-center text-[11px] font-semibold text-[#E8E0D1] sm:text-xs">
                                {skill.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section
            id="skills"
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
         

            <div className="relative z-10 mx-auto w-full max-w-[1200px]">
                {/* Section Heading */}
                <div className="mb-12">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-[2px] w-10 bg-gradient-to-r from-[#8A5B16] to-[#D4A344]" />

                        <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#8A5B16]">
                            My Expertise
                        </p>

                        <span className="rounded-full border border-[#B88932]/30 bg-[#B88932]/10 px-3 py-1 text-[10px] font-bold tracking-widest text-[#8A5B16]">
                            03
                        </span>
                    </div>

                    <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#151515] sm:text-5xl lg:text-6xl">
                        Skills{" "}
                        <span className="bg-gradient-to-r from-[#8A5B16] via-[#B88932] to-[#D4A344] bg-clip-text text-transparent">
                            & Technologies.
                        </span>
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#68635C] sm:text-base">
                        Technologies and tools I use to build modern,
                        responsive, and scalable web applications.
                    </p>
                </div>

                {/* Frontend & Backend */}
                <div className="grid gap-5 lg:grid-cols-2">
                    <SkillCard
                        title="Frontend Development"
                        icon={Code2}
                        skills={frontendSkills}
                    />

                    <SkillCard
                        title="Backend Development"
                        icon={Server}
                        skills={backendSkills}
                    />
                </div>

                {/* Tools */}
                <div className="mt-5">
                    <SkillCard
                        title="Tools & Technologies"
                        icon={Wrench}
                        skills={toolSkills}
                    />
                </div>
            </div>
        </section>
    );
}