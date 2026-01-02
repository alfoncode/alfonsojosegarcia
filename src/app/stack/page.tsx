import Header from '@/components/Header';
import Footer from '@/components/Footer';

const technologies = {
    languages: [
        { name: 'Java', level: 95, description: 'Spring Boot, Maven, Gradle' },
        { name: 'TypeScript', level: 90, description: 'Node.js, React, Next.js' },
        { name: 'Python', level: 85, description: 'Scripts, Automation, Testing' },
        { name: 'Bash', level: 90, description: 'Shell scripting, Linux' },
        { name: 'YAML', level: 95, description: 'Pipeline definitions, IaC' },
    ],
    cicd: [
        { name: 'GitHub Actions', icon: '🔄', description: 'Workflows, Composite Actions, Reusable Workflows' },
        { name: 'Jenkins', icon: '🔧', description: 'Pipelines, Shared Libraries, Plugins' },
        { name: 'GitLab CI', icon: '🦊', description: 'CI/CD, Auto DevOps' },
        { name: 'Azure DevOps', icon: '☁️', description: 'Pipelines, Artifacts' },
    ],
    security: [
        { name: 'SonarQube', icon: '🔍', description: 'Code quality & SAST' },
        { name: 'Checkmarx', icon: '🛡️', description: 'SAST, SCA' },
        { name: 'Snyk', icon: '🐍', description: 'Dependency scanning' },
        { name: 'OWASP ZAP', icon: '⚡', description: 'DAST' },
        { name: 'Trivy', icon: '🔒', description: 'Container scanning' },
    ],
    containers: [
        { name: 'Docker', icon: '🐳', description: 'Containerization, Multi-stage builds' },
        { name: 'Kubernetes', icon: '☸️', description: 'Orchestration, Helm, ArgoCD' },
        { name: 'Podman', icon: '🦭', description: 'Rootless containers' },
    ],
    cloud: [
        { name: 'AWS', icon: '☁️', description: 'EC2, ECS, Lambda, S3, IAM' },
        { name: 'Azure', icon: '🔷', description: 'AKS, Functions, DevOps' },
        { name: 'GCP', icon: '🌐', description: 'GKE, Cloud Build' },
    ],
    testing: [
        { name: 'JUnit', icon: '✅', description: 'Unit testing for Java' },
        { name: 'Jest', icon: '🃏', description: 'JavaScript testing' },
        { name: 'Playwright', icon: '🎭', description: 'E2E testing' },
        { name: 'k6', icon: '📊', description: 'Load testing' },
        { name: 'Pact', icon: '📝', description: 'Contract testing' },
    ],
};

export default function StackPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0b]">
            <Header />

            <main className="pt-24 pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero */}
                    <section className="py-12 text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Stack Tecnológico
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Herramientas y tecnologías con las que trabajo diariamente para construir
                            pipelines seguros y automatizar el ciclo de vida del software.
                        </p>
                    </section>

                    {/* Languages */}
                    <section className="py-12">
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#3b82f6]/10 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </span>
                            Lenguajes de Programación
                        </h2>
                        <div className="space-y-4">
                            {technologies.languages.map((lang) => (
                                <div key={lang.name} className="bg-[#1a1a1d] border border-[#2a2a2d] rounded-xl p-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <h3 className="text-white font-semibold">{lang.name}</h3>
                                            <p className="text-gray-400 text-sm">{lang.description}</p>
                                        </div>
                                        <span className="text-[#3b82f6] font-bold">{lang.level}%</span>
                                    </div>
                                    <div className="h-2 bg-[#2a2a2d] rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-full transition-all duration-500"
                                            style={{ width: `${lang.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CI/CD */}
                    <section className="py-12">
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#3b82f6]/10 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </span>
                            CI/CD
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {technologies.cicd.map((tool) => (
                                <div key={tool.name} className="bg-[#1a1a1d] border border-[#2a2a2d] rounded-xl p-5 hover:border-[#3b82f6]/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">{tool.icon}</span>
                                        <div>
                                            <h3 className="text-white font-semibold">{tool.name}</h3>
                                            <p className="text-gray-400 text-sm">{tool.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Security */}
                    <section className="py-12">
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#3b82f6]/10 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </span>
                            Seguridad
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {technologies.security.map((tool) => (
                                <div key={tool.name} className="bg-[#1a1a1d] border border-[#2a2a2d] rounded-xl p-5 hover:border-[#3b82f6]/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">{tool.icon}</span>
                                        <div>
                                            <h3 className="text-white font-semibold">{tool.name}</h3>
                                            <p className="text-gray-400 text-sm">{tool.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Containers & Cloud */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Containers */}
                        <section className="py-12">
                            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-10 h-10 bg-[#3b82f6]/10 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </span>
                                Contenedores
                            </h2>
                            <div className="space-y-4">
                                {technologies.containers.map((tool) => (
                                    <div key={tool.name} className="bg-[#1a1a1d] border border-[#2a2a2d] rounded-xl p-5 hover:border-[#3b82f6]/50 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <span className="text-2xl">{tool.icon}</span>
                                            <div>
                                                <h3 className="text-white font-semibold">{tool.name}</h3>
                                                <p className="text-gray-400 text-sm">{tool.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Cloud */}
                        <section className="py-12">
                            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-10 h-10 bg-[#3b82f6]/10 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg>
                                </span>
                                Cloud
                            </h2>
                            <div className="space-y-4">
                                {technologies.cloud.map((tool) => (
                                    <div key={tool.name} className="bg-[#1a1a1d] border border-[#2a2a2d] rounded-xl p-5 hover:border-[#3b82f6]/50 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <span className="text-2xl">{tool.icon}</span>
                                            <div>
                                                <h3 className="text-white font-semibold">{tool.name}</h3>
                                                <p className="text-gray-400 text-sm">{tool.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Testing */}
                    <section className="py-12">
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#3b82f6]/10 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </span>
                            Testing
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {technologies.testing.map((tool) => (
                                <div key={tool.name} className="bg-[#1a1a1d] border border-[#2a2a2d] rounded-xl p-5 hover:border-[#3b82f6]/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">{tool.icon}</span>
                                        <div>
                                            <h3 className="text-white font-semibold">{tool.name}</h3>
                                            <p className="text-gray-400 text-sm">{tool.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
