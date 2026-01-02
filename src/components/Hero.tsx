import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Open to Work Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-green-500 text-sm font-medium">OPEN TO WORK</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="text-white">Ingeniero de</span>
                            <br />
                            <span className="text-white">Software &</span>
                            <br />
                            <span className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
                                DevSecOps
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-400 text-lg mb-8 max-w-lg">
                            Construyendo pipelines seguros en <span className="text-white font-semibold">Banco Santander</span>.
                            Especialista en automatización, testing de seguridad e infraestructura como código (IaC).
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/blog"
                                className="px-6 py-3 bg-[#3b82f6] hover:bg-[#1d4ed8] text-white font-medium rounded-lg transition-colors"
                            >
                                Ver Artículos
                            </Link>
                            <Link
                                href="/about"
                                className="px-6 py-3 bg-transparent border border-[#2a2a2d] hover:border-[#3b82f6] text-white font-medium rounded-lg transition-colors"
                            >
                                Mi Experiencia
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="relative">
                        <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1d] to-[#0a0a0b] border border-[#2a2a2d]">
                            {/* Profile placeholder - replace with actual image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full bg-[#2a2a2d] flex items-center justify-center">
                                    <svg className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Location Badge */}
                            <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 bg-[#0a0a0b]/80 backdrop-blur-sm rounded-lg border border-[#2a2a2d]">
                                <svg className="w-4 h-4 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white text-sm">Madrid, España</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
