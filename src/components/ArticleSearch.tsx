'use client';

import { useState } from 'react';

interface ArticleSearchProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

export default function ArticleSearch({ onSearch, placeholder = "Buscar por tema: CICD, Testing, Seguridad..." }: ArticleSearchProps) {
    const [query, setQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl font-semibold text-white mb-4">Buscador de Artículos</h2>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full pl-12 pr-4 py-4 bg-[#1a1a1d] border border-[#2a2a2d] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3b82f6] transition-colors"
                    />
                </div>
            </div>
        </section>
    );
}
