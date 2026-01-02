'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { getAllArticles, getFeaturedArticles, searchArticles, categories, type Article } from '@/lib/articles';
import Link from 'next/link';

export default function BlogPage() {
    const allArticles = getAllArticles();
    const featuredArticles = getFeaturedArticles();
    const [filteredArticles, setFilteredArticles] = useState<Article[]>(allArticles);
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        if (category === 'Todos') {
            setFilteredArticles(allArticles);
        } else {
            setFilteredArticles(
                allArticles.filter(article =>
                    article.category.toLowerCase().includes(category.toLowerCase()) ||
                    article.tags?.some(tag => tag.toLowerCase().includes(category.toLowerCase()))
                )
            );
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim() === '') {
            handleCategoryChange(activeCategory);
        } else {
            setFilteredArticles(searchArticles(query));
        }
    };

    const featuredArticle = featuredArticles[0];

    return (
        <div className="min-h-screen bg-[#0a0a0b]">
            <Header />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-full mb-6">
                            <span className="text-[#3b82f6] text-sm font-medium">⚙️ INGENIERÍA & SEGURIDAD</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            Blog de Ingeniería
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Explorando la intersección entre desarrollo, operaciones y seguridad.
                            Artículos técnicos sobre CI/CD, Testing avanzado y estrategias DevSecOps.
                        </p>
                    </div>
                </section>

                {/* Search and Filters */}
                <section className="px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            {/* Search */}
                            <div className="relative w-full md:w-80">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    placeholder="Buscar artículos por título o tag..."
                                    className="w-full pl-10 pr-4 py-2 bg-[#1a1a1d] border border-[#2a2a2d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3b82f6] transition-colors"
                                />
                            </div>

                            {/* Category Filters */}
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => handleCategoryChange(category)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === category
                                                ? 'bg-[#3b82f6] text-white'
                                                : 'bg-[#1a1a1d] text-gray-400 hover:text-white border border-[#2a2a2d]'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Article */}
                {featuredArticle && !searchQuery && activeCategory === 'Todos' && (
                    <section className="px-4 sm:px-6 lg:px-8 mb-12">
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-[#1a1a1d] border border-[#2a2a2d] rounded-2xl overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Image */}
                                    <div className="relative h-64 lg:h-auto bg-gradient-to-br from-[#3b82f6]/20 to-[#1a1a1d]">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-24 h-24 text-[#2a2a2d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-yellow-500 text-sm">⭐ DESTACADO</span>
                                            <span className="text-gray-500">•</span>
                                            <span className="text-[#3b82f6] text-sm">{featuredArticle.category}</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-4">
                                            {featuredArticle.title}
                                        </h2>
                                        <p className="text-gray-400 mb-6">
                                            {featuredArticle.excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                            <span>📅 {featuredArticle.date}</span>
                                            <span>⏱ {featuredArticle.readTime} lectura</span>
                                        </div>
                                        <Link
                                            href={`/blog/${featuredArticle.slug}`}
                                            className="inline-flex items-center gap-2 text-[#3b82f6] font-medium hover:gap-3 transition-all"
                                        >
                                            Leer artículo completo
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Articles Grid */}
                <section className="px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="max-w-6xl mx-auto">
                        {filteredArticles.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredArticles.map((article) => (
                                    <ArticleCard
                                        key={article.slug}
                                        slug={article.slug}
                                        title={article.title}
                                        excerpt={article.excerpt}
                                        date={article.date}
                                        category={article.category}
                                        image={article.image}
                                        readTime={article.readTime}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <svg className="w-16 h-16 text-[#2a2a2d] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-gray-400">No se encontraron artículos.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Newsletter */}
                <section className="px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-[#1a1a1d] to-[#111113] border border-[#2a2a2d] rounded-2xl p-8 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        Suscríbete al newsletter
                                    </h2>
                                    <p className="text-gray-400 text-sm">
                                        Recibe las últimas actualizaciones sobre ingeniería de software, seguridad y DevOps directamente en tu bandeja de entrada.
                                    </p>
                                </div>
                                <div>
                                    <div className="flex gap-2">
                                        <input
                                            type="email"
                                            placeholder="tu@email.com"
                                            className="flex-1 px-4 py-3 bg-[#0a0a0b] border border-[#2a2a2d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3b82f6] transition-colors"
                                        />
                                        <button className="px-6 py-3 bg-[#3b82f6] hover:bg-[#1d4ed8] text-white font-medium rounded-lg transition-colors">
                                            Suscribir
                                        </button>
                                    </div>
                                    <p className="text-gray-500 text-xs mt-2">
                                        No enviamos spam. Solo te suscribirás a actualizaciones relevantes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
