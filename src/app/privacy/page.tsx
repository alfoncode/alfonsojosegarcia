import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0b]">
            <Header />

            <main className="pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidad</h1>

                    <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
                        <p>
                            Última actualización: Enero 2026
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Información que Recopilamos</h2>
                        <p>
                            Este sitio web no recopila información personal identificable de los visitantes.
                            No utilizamos cookies de seguimiento ni servicios de analytics que identifiquen usuarios individuales.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Uso de la Información</h2>
                        <p>
                            Si decides contactarme a través del formulario de contacto, tu información será utilizada
                            únicamente para responder a tu consulta y no será compartida con terceros.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Newsletter</h2>
                        <p>
                            Si te suscribes al newsletter, tu dirección de correo electrónico será utilizada
                            exclusivamente para enviarte actualizaciones sobre nuevos artículos y contenido del blog.
                            Puedes darte de baja en cualquier momento.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Enlaces Externos</h2>
                        <p>
                            Este sitio puede contener enlaces a sitios externos. No soy responsable de las
                            prácticas de privacidad de esos sitios.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Contacto</h2>
                        <p>
                            Si tienes preguntas sobre esta política de privacidad, puedes contactarme en{' '}
                            <a href="mailto:contacto@alfonsojosegarcia.com" className="text-[#3b82f6] hover:underline">
                                contacto@alfonsojosegarcia.com
                            </a>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
