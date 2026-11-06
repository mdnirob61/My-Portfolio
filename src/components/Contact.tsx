import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="px-5 py-13">
            
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-8">
                    <p className="text-[#D4A344] uppercase tracking-[4px] text-sm mb-3">
                        Get In Touch
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-black">
                        Let&apos;s Connect
                    </h2>

                    <p className="text-[#A8A29E] mt-4 max-w-xl mx-auto">
                        Have a project in mind or want to work together? Feel free to
                        reach out. I&apos;d love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Email */}
                    <a
                        href="mailto:nirobstudy2004@gmail.com"
                        className="border border-[#B88932]/20 bg-[#211F1B] rounded-2xl p-8 text-center hover:border-[#D4A344]/60 transition-all"
                    >
                        <Mail className="w-8 h-8 text-[#D4A344] mx-auto mb-4" />
                        <h3 className="text-[#F3F0E9] font-semibold mb-2">Email</h3>
                        <p className="text-[#A8A29E] text-sm break-all">
                            nirobstudy2004@gmail.com
                        </p>
                    </a>

                    {/* Phone */}
                    <a
                        href="tel:+8801516583068"
                        className="border border-[#B88932]/20 bg-[#211F1B] rounded-2xl p-8 text-center hover:border-[#D4A344]/60 transition-all"
                    >
                        <Phone className="w-8 h-8 text-[#D4A344] mx-auto mb-4" />
                        <h3 className="text-[#F3F0E9] font-semibold mb-2">Phone</h3>
                        <p className="text-[#A8A29E] text-sm">+8801516583068</p>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/8801516583068"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#B88932]/20 bg-[#211F1B] rounded-2xl p-8 text-center hover:border-[#D4A344]/60 transition-all"
                    >
                        <MessageCircle className="w-8 h-8 text-[#D4A344] mx-auto mb-4" />
                        <h3 className="text-[#F3F0E9] font-semibold mb-2">WhatsApp</h3>
                        <p className="text-[#A8A29E] text-sm">Chat with me</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;