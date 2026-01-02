import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0b]">
            <Header />

            <main className="pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero */}
                    <section className="py-12 text-center">
                        <div className="w-24 h-24 bg-[#1a1a1d] rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-[#3b82f6]">
                            <span className="text-[#3b82f6] font-bold text-3xl">AJG</span>
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Alfonso José García Bañón
                        </h1>
                        <p className="text-xl text-[#3b82f6] mb-4">
                            Ingeniero de Software & DevSecOps
                        </p>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Especialista en el ciclo de vida del software, automatización de pipelines seguros
                            y testing en el Banco Santander.
                        </p>
                    </section>

                    {/* About Content */}
                    <section className="py-12">
                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#2a2a2d] pb-4">
                                Sobre mí
                            </h2>

                            <div className="space-y-6 text-gray-300">
                                <p>
                                    Soy ingeniero de software con más de 10 años de experiencia en el sector tecnológico
                                    y financiero. Actualmente trabajo en el <span className="text-white font-semibold">Banco Santander</span> como
                                    especialista en DevSecOps, donde lidero iniciativas relacionadas con la automatización
                                    del ciclo de vida del software (ALM) y la seguridad en los procesos de desarrollo.
                                </p>

                                <p>
                                    Mi pasión está en la intersección entre el desarrollo, las operaciones y la seguridad.
                                    Creo firmemente que la seguridad debe integrarse desde el primer día del desarrollo,
                                    no como un paso adicional al final del proceso. Esta filosofía "shift-left" guía
                                    mi trabajo diario y los contenidos que comparto en este blog.
                                </p>

                                <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                                    Experiencia Profesional
                                </h3>

                                <div className="bg-[#1a1a1d] border border-[#2a2a2d] rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#ea0a2a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-[#ea0a2a] font-bold text-sm">SAN</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">DevSecOps Engineer</h4>
                                            <p className="text-[#3b82f6] text-sm">Banco Santander • 2020 - Presente</p>
                                            <ul className="mt-3 text-gray-400 text-sm space-y-1">
                                                <li>• Gestión de plataforma ALM para equipos de desarrollo</li>
                                                <li>• Diseño e implementación de pipelines CI/CD seguros</li>
                                                <li>• Integración de herramientas SAST/DAST en flujos de trabajo</li>
                                                <li>• Automatización de procesos con GitHub Actions</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                                    Áreas de Especialización
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-[#1a1a1d] border border-[#2a2a2d] rounded-xl p-5">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-[#3b82f6]/10 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                            </div>
                                            <h4 className="text-white font-semibold">CI/CD</h4>
                                        </div>
                                        <p className="text-gray-400 text-sm">
                                            Jenkins, GitHub Actions, GitLab CI. Diseño de pipelines eficientes y seguros.
                                        </p>
                                    </div>

                                    <div className="bg-[#1a1a1d] border border-[#2a2a2d] rounded-xl p-5">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-[#3b82f6]/10 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-white font-semibold">Seguridad</h4>
                                        </div>
                                        <p className="text-gray-400 text-sm">
                                            SAST, DAST, SCA. Integración de seguridad en el SDLC.
                                        </p>
                                    </div>

                                    <div className="bg-[#1a1a1d] border border-[#2a2a2d] rounded-xl p-5">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-[#3b82f6]/10 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                                </svg>
                                            </div>
                                            <h4 className="text-white font-semibold">Testing</h4>
                                        </div>
                                        <p className="text-gray-400 text-sm">
                                            Pruebas unitarias, integración, E2E. Estrategias de testing automatizado.
                                        </p>
                                    </div>

                                    <div className="bg-[#1a1a1d] border border-[#2a2a2d] rounded-xl p-5">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-[#3b82f6]/10 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-white font-semibold">Contenedores</h4>
                                        </div>
                                        <p className="text-gray-400 text-sm">
                                            Docker, Kubernetes. Orquestación y despliegue de aplicaciones.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                                    Este Blog
                                </h3>

                                <p>
                                    En este espacio comparto mis experiencias, aprendizajes y reflexiones sobre
                                    ingeniería de software, DevOps y seguridad. Mi objetivo es ayudar a otros
                                    profesionales a implementar mejores prácticas en sus proyectos y equipos.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="py-12 text-center">
                        <div className="bg-gradient-to-r from-[#1a1a1d] to-[#111113] border border-[#2a2a2d] rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                ¿Quieres colaborar?
                            </h2>
                            <p className="text-gray-400 mb-6">
                                Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] hover:bg-[#1d4ed8] text-white font-medium rounded-lg transition-colors"
                            >
                                Contactar
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
