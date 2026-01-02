'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0b]/80 backdrop-blur-md border-b border-[#2a2a2d]">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <span className="font-semibold text-white">Alfonso JG Bañón</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                            Inicio
                        </Link>
                        <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                            Blog
                        </Link>
                        <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                            Sobre mí
                        </Link>
                        <Link href="/stack" className="text-gray-300 hover:text-white transition-colors">
                            Stack
                        </Link>
                        <Link
                            href="/contact"
                            className="px-4 py-2 bg-[#3b82f6] hover:bg-[#1d4ed8] text-white rounded-lg transition-colors"
                        >
                            Contactar
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-white"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-[#2a2a2d]">
                        <div className="flex flex-col gap-4">
                            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                                Inicio
                            </Link>
                            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                                Blog
                            </Link>
                            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                                Sobre mí
                            </Link>
                            <Link href="/stack" className="text-gray-300 hover:text-white transition-colors">
                                Stack
                            </Link>
                            <Link
                                href="/contact"
                                className="px-4 py-2 bg-[#3b82f6] hover:bg-[#1d4ed8] text-white rounded-lg transition-colors text-center"
                            >
                                Contactar
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
