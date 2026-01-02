import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { getArticleBySlug, getRelatedArticles, getAllArticles } from '@/lib/articles';

interface ArticlePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const relatedArticles = getRelatedArticles(slug, article.category);

    // Simple markdown-like content rendering
    const renderContent = (content: string) => {
        return content
            .split('\n')
            .map((line, index) => {
                // Headers
                if (line.startsWith('## ')) {
                    return <h2 key={index} id={line.slice(3).toLowerCase().replace(/\s+/g, '-')}>{line.slice(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                    return <h3 key={index}>{line.slice(4)}</h3>;
                }
                // Blockquotes
                if (line.startsWith('> ')) {
                    return <blockquote key={index}>{line.slice(2)}</blockquote>;
                }
                // List items
                if (line.startsWith('- ')) {
                    return <li key={index}>{line.slice(2)}</li>;
                }
                if (line.match(/^\d+\. /)) {
                    return <li key={index}>{line.replace(/^\d+\. /, '')}</li>;
                }
                // Code blocks - simplified
                if (line.startsWith('```')) {
                    return null;
                }
                // Empty lines
                if (line.trim() === '') {
                    return <br key={index} />;
                }
                // Regular paragraphs
                return <p key={index}>{line}</p>;
            })
            .filter(Boolean);
    };

    // Extract headings for table of contents
    const headings = article.content
        .split('\n')
        .filter(line => line.startsWith('## '))
        .map(line => ({
            text: line.slice(3),
            id: line.slice(3).toLowerCase().replace(/\s+/g, '-'),
        }));

    return (
        <div className="min-h-screen bg-[#0a0a0b]">
            <Header />

            <main className="pt-24 pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Table of Contents - Sidebar */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-24">
                                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                                    Tabla de Contenidos
                                </h4>
                                <nav className="space-y-2">
                                    {headings.map((heading, index) => (
                                        <a
                                            key={index}
                                            href={`#${heading.id}`}
                                            className="block text-sm text-gray-400 hover:text-white transition-colors py-1 border-l-2 border-[#2a2a2d] hover:border-[#3b82f6] pl-3"
                                        >
                                            {heading.text}
                                        </a>
                                    ))}
                                </nav>

                                {/* Share */}
                                <div className="mt-8 pt-8 border-t border-[#2a2a2d]">
                                    <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                                        Compartir
                                    </h4>
                                    <div className="flex gap-2">
                                        <a
                                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://alfonsojosegarcia.com/blog/${slug}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 flex items-center justify-center bg-[#1a1a1d] hover:bg-[#1da1f2] rounded-lg transition-colors group"
                                        >
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </a>
                                        <a
                                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://alfonsojosegarcia.com/blog/${slug}`)}&title=${encodeURIComponent(article.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 flex items-center justify-center bg-[#1a1a1d] hover:bg-[#0077b5] rounded-lg transition-colors group"
                                        >
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <article className="lg:col-span-3">
                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                                <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                                <span>/</span>
                                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                                <span>/</span>
                                <span className="text-[#3b82f6]">{article.category}</span>
                            </nav>

                            {/* Article Header */}
                            <header className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-2 py-1 bg-[#3b82f6]/20 text-[#3b82f6] text-xs font-medium rounded">
                                        {article.category}
                                    </span>
                                    {article.featured && (
                                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 text-xs font-medium rounded">
                                            ⭐ Destacado
                                        </span>
                                    )}
                                </div>
                                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    {article.title}
                                </h1>
                                <p className="text-gray-400 text-lg mb-6">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-[#1a1a1d] rounded-full flex items-center justify-center">
                                            <span className="text-[#3b82f6] font-semibold">AJG</span>
                                        </div>
                                        <div>
                                            <p className="text-white">Alfonso J. García</p>
                                            <p className="text-gray-500 text-xs">{article.date}</p>
                                        </div>
                                    </div>
                                    <span className="text-gray-600">•</span>
                                    <span>{article.readTime} lectura</span>
                                </div>
                            </header>

                            {/* Article Content */}
                            <div className="article-content prose prose-invert max-w-none">
                                {renderContent(article.content)}
                            </div>

                            {/* Tags */}
                            {article.tags && article.tags.length > 0 && (
                                <div className="mt-12 pt-8 border-t border-[#2a2a2d]">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-gray-400 text-sm">Tags:</span>
                                        {article.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-[#1a1a1d] text-gray-300 text-sm rounded-full border border-[#2a2a2d]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Author Card */}
                            <div className="mt-12 p-6 bg-[#1a1a1d] border border-[#2a2a2d] rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 bg-[#2a2a2d] rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-[#3b82f6] font-bold text-xl">AJG</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Alfonso José García Bañón</h4>
                                        <p className="text-[#3b82f6] text-sm mb-2">Ingeniero de Software & DevSecOps @ Banco Santander</p>
                                        <p className="text-gray-400 text-sm mb-3">
                                            Especialista en CI/CD, testing automatizado y seguridad de aplicaciones.
                                            Compartiendo conocimientos sobre desarrollo seguro y operaciones eficientes.
                                        </p>
                                        <div className="flex gap-3">
                                            <a href="https://linkedin.com/in/alfonsojosegarcia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </a>
                                            <a href="https://github.com/alfonsojosegarcia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                            <a href="https://twitter.com/alfonsojgarcia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Related Articles */}
                    {relatedArticles.length > 0 && (
                        <section className="mt-16 pt-16 border-t border-[#2a2a2d]">
                            <h2 className="text-2xl font-bold text-white mb-8">Artículos Relacionados</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedArticles.map((article) => (
                                    <ArticleCard
                                        key={article.slug}
                                        slug={article.slug}
                                        title={article.title}
                                        excerpt={article.excerpt}
                                        date={article.date}
                                        category={article.category}
                                        readTime={article.readTime}
                                    />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
