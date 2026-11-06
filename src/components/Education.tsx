import {
    GraduationCap,
    BookOpen,
    CalendarDays,
    MapPin,
    Award,
    Clock,
} from "lucide-react";

const educationData = [
    {
        id: "01",
        degree: "Bachelor of Science",
        subject: "Computer Science & Engineering",
        institution: "Tejgaon College",
        location: "Dhaka, Bangladesh",
        affiliation: "National University of Bangladesh",
        period: "2023 – Present",
        status: "Currently Pursuing",
        semester: "5th Semester",
        icon: GraduationCap,
        type: "Undergraduate",
    },
    {
        id: "02",
        degree: "Higher Secondary Certificate",
        subject: "Science",
        institution: "Jashore Shikkha Board Govt. Model School and College",
        location: "Jashore, Bangladesh",
        period: "2021",
        status: "Completed",
        result: "GPA 5.00",
        icon: BookOpen,
        type: "Higher Secondary",
    },
];

export default function Education() {
    return (
        <section
            id="education"
            className="relative isolate overflow-hidden px-5 py-13 sm:py-10 sm:px-8 lg:px-12 mt-10 rounded-2xl"
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

            <div className="relative z-10 mx-auto w-full max-w-[1200px]">
                {/* Section Heading */}
                <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-[2px] w-10 bg-gradient-to-r from-[#8A5B16] to-[#D4A344]" />

                        <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#8A5B16]">
                            My Academic Journey
                        </p>

                        <span className="rounded-full border border-[#B88932]/30 bg-[#B88932]/10 px-3 py-1 text-[10px] font-bold tracking-widest text-[#8A5B16]">
                            03
                        </span>
                    </div>

                    <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#151515] sm:text-5xl lg:text-6xl">
                        Educational{" "}
                        <span className="bg-gradient-to-r from-[#8A5B16] via-[#B88932] to-[#D4A344] bg-clip-text text-transparent">
                            Background.
                        </span>
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#68635C] sm:text-base">
                        My academic journey, where I have built the
                        foundation for my knowledge and passion for
                        technology.
                    </p>
                </div>

                {/* Education Timeline */}
                <div className="relative mx-auto max-w-4xl">
                    {/* Timeline Line */}
                    <div className="absolute bottom-10 left-[19px] top-10 w-px bg-gradient-to-b from-[#B88932] via-[#D4A344]/60 to-transparent sm:left-[27px]" />

                    <div className="space-y-7">
                        {educationData.map((education) => {
                            const Icon = education.icon;

                            return (
                                <div
                                    key={education.id}
                                    className="relative flex gap-5 sm:gap-7"
                                >
                                    {/* Timeline Icon */}
                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#B88932]/40 bg-[#F3F0E9] text-[#8A5B16] shadow-sm sm:h-14 sm:w-14">
                                        <Icon size={24} />
                                    </div>

                                    {/* Education Card */}
                                    <div className="group mb-1 min-w-0 flex-1 rounded-2xl border border-[#B88932]/25 bg-[#211F1B] p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#B88932]/60 hover:shadow-xl sm:p-7">
                                        {/* Top Row */}
                                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                                            <span className="text-xs font-bold tracking-[0.2em] text-[#D4A344]">
                                                EDUCATION {education.id}
                                            </span>

                                            <span
                                                className={`rounded-full px-3 py-1.5 text-[10px] font-bold tracking-wide ${education.status ===
                                                    "Completed"
                                                    ? "border border-green-400/20 bg-green-400/10 text-green-400"
                                                    : "border border-[#D4A344]/30 bg-[#D4A344]/10 text-[#D4A344]"
                                                    }`}
                                            >
                                                {education.status}
                                            </span>
                                        </div>

                                        {/* Degree */}
                                        <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                                            {education.degree}
                                        </h3>

                                        <p className="mt-1 text-sm font-semibold text-[#D4A344] sm:text-base">
                                            {education.subject}
                                        </p>

                                        {/* Institution */}
                                        <div className="mt-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-[#E8E0D1]">
                                                <GraduationCap
                                                    size={17}
                                                    className="mt-0.5 shrink-0 text-[#D4A344]"
                                                />

                                                <span className="font-semibold">
                                                    {education.institution}
                                                </span>
                                            </div>

                                            <div className="flex items-start gap-2.5 text-xs text-[#BDB5A8]">
                                                <MapPin
                                                    size={15}
                                                    className="mt-0.5 shrink-0 text-[#B88932]"
                                                />

                                                {education.location}
                                            </div>

                                            {education.affiliation && (
                                                <div className="flex items-start gap-2.5 text-xs text-[#BDB5A8]">
                                                    <BookOpen
                                                        size={15}
                                                        className="mt-0.5 shrink-0 text-[#B88932]"
                                                    />

                                                    {education.affiliation}
                                                </div>
                                            )}
                                        </div>

                                        {/* Bottom Information */}
                                        <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                                            <div className="flex items-center gap-2 rounded-lg bg-white/[0.05] px-3 py-2 text-xs text-[#E8E0D1]">
                                                <CalendarDays
                                                    size={15}
                                                    className="text-[#D4A344]"
                                                />
                                                {education.period}
                                            </div>

                                            {education.semester && (
                                                <div className="flex items-center gap-2 rounded-lg bg-white/[0.05] px-3 py-2 text-xs text-[#E8E0D1]">
                                                    <Clock
                                                        size={15}
                                                        className="text-[#D4A344]"
                                                    />
                                                    {education.semester}
                                                </div>
                                            )}

                                            {education.result && (
                                                <div className="flex items-center gap-2 rounded-lg border border-[#D4A344]/25 bg-[#D4A344]/10 px-3 py-2 text-xs font-bold text-[#D4A344]">
                                                    <Award size={15} />
                                                    {education.result}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}