'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import ArticleSearch from '@/components/ArticleSearch';
import ArticleCard from '@/components/ArticleCard';
import ContactSection from '@/components/ContactSection';
import { getAllArticles, searchArticles, type Article } from '@/lib/articles';

export default function Home() {
  const allArticles = getAllArticles();
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(allArticles.slice(0, 3));
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      setFilteredArticles(allArticles.slice(0, 3));
      setIsSearching(false);
    } else {
      const results = searchArticles(query);
      setFilteredArticles(results.slice(0, 6));
      setIsSearching(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Article Search */}
        <ArticleSearch onSearch={handleSearch} />

        {/* Articles Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">
                {isSearching ? 'Resultados de búsqueda' : 'Últimos Artículos'}
              </h2>
              <a
                href="/blog"
                className="text-[#3b82f6] hover:text-[#1d4ed8] text-sm font-medium transition-colors"
              >
                Ver todos
              </a>
            </div>

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
                <p className="text-gray-400">No se encontraron artículos con ese término.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
