import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a0b] border-t border-[#2a2a2d] mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <span className="font-semibold text-white">AGB.dev</span>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-sm">
                            Blog personal de Alfonso José García Bañón. Compartiendo conocimientos sobre desarrollo seguro y operaciones eficientes.
                        </p>
                    </div>

                    {/* Explorar */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Explorar</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Artículos Recientes
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog?category=cicd" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    CI/CD
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog?category=testing" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Testing
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Sobre Mí
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Conectar */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Conectar</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://linkedin.com/in/alfonsojosegarcia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/alfonsojosegarcia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/alfonsojgarcia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Twitter / X
                                </a>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-[#2a2a2d] flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Alfonso José García Bañón. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                            Privacidad
                        </Link>
                        <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                            Términos
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
