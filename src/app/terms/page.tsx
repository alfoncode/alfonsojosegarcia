import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0b]">
            <Header />

            <main className="pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-white mb-8">Términos y Condiciones</h1>

                    <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
                        <p>
                            Última actualización: Enero 2026
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Uso del Sitio</h2>
                        <p>
                            Este sitio web es un blog personal con fines informativos y educativos.
                            El contenido publicado representa mis opiniones y experiencias personales,
                            y no refleja necesariamente las opiniones de mi empleador.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Propiedad Intelectual</h2>
                        <p>
                            Todo el contenido original de este sitio, incluyendo textos, código y diseño,
                            es propiedad de Alfonso José García Bañón. Los fragmentos de código compartidos
                            en los artículos pueden ser utilizados libremente para fines educativos y proyectos personales.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Exención de Responsabilidad</h2>
                        <p>
                            La información proporcionada en este blog es solo para fines informativos.
                            No me hago responsable de cualquier daño o pérdida que pueda resultar del uso
                            de la información proporcionada. Siempre verifica y prueba cualquier código
                            en un entorno seguro antes de usarlo en producción.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Comentarios y Contribuciones</h2>
                        <p>
                            Me reservo el derecho de moderar o eliminar comentarios que sean inapropiados,
                            spam o que violen estos términos.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Cambios en los Términos</h2>
                        <p>
                            Estos términos pueden ser actualizados ocasionalmente. Se recomienda revisar
                            esta página periódicamente para estar al tanto de cualquier cambio.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Contacto</h2>
                        <p>
                            Para cualquier consulta sobre estos términos, puedes contactarme en{' '}
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
