export default function PortfolioBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
            {/* Base Background */}
            <div className="absolute inset-0 bg-[#E8E0D1]" />

            {/* Top Golden Glow */}
            <div className="absolute -right-40 top-[5%] h-[500px] w-[500px] rounded-full bg-[#D4A344]/20 blur-[120px]" />

            {/* Middle Golden Glow */}
            <div className="absolute -left-48 top-[40%] h-[500px] w-[500px] rounded-full bg-[#B88932]/15 blur-[130px]" />

            {/* Bottom Golden Glow */}
            <div className="absolute -right-40 bottom-[5%] h-[450px] w-[450px] rounded-full bg-[#D4A344]/20 blur-[120px]" />

            {/* Subtle Dot Pattern */}
            <div
                className="absolute inset-0 opacity-[0.10]"
                style={{
                    backgroundImage:
                        "radial-gradient(#8A5B16 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Decorative Golden Rings */}
            <div className="absolute -right-32 top-[18%] h-[420px] w-[420px] rounded-full border border-[#8A5B16]/20" />

            <div className="absolute -right-20 top-[21%] h-[300px] w-[300px] rounded-full border border-[#8A5B16]/15" />

            <div className="absolute -left-32 top-[65%] h-[350px] w-[350px] rounded-full border border-[#8A5B16]/15" />

            {/* Diagonal Pattern */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(135deg, #8A5B16 0px, #8A5B16 1px, transparent 1px, transparent 45px)",
                }}
            />
        </div>
    );
}