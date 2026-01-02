import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image?: string;
    readTime?: string;
}

const categoryColors: Record<string, string> = {
    SEGURIDAD: 'bg-red-500/20 text-red-400',
    TESTING: 'bg-green-500/20 text-green-400',
    DEVOPS: 'bg-blue-500/20 text-blue-400',
    CICD: 'bg-purple-500/20 text-purple-400',
    ARQUITECTURA: 'bg-orange-500/20 text-orange-400',
};

export default function ArticleCard({ slug, title, excerpt, date, category, image, readTime }: ArticleCardProps) {
    const categoryClass = categoryColors[category.toUpperCase()] || 'bg-gray-500/20 text-gray-400';

    return (
        <article className="group bg-[#1a1a1d] border border-[#2a2a2d] rounded-xl overflow-hidden hover:border-[#3b82f6]/50 transition-all duration-300">
            {/* Image */}
            <div className="relative h-48 bg-gradient-to-br from-[#1a1a1d] to-[#0a0a0b] overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-[#2a2a2d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                )}
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${categoryClass}`}>
                        {category.toUpperCase()}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{date}</span>
                    {readTime && (
                        <>
                            <span>•</span>
                            <span>{readTime}</span>
                        </>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3b82f6] transition-colors line-clamp-2">
                    {title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {excerpt}
                </p>

                {/* Read More Link */}
                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center gap-1 text-[#3b82f6] text-sm font-medium hover:gap-2 transition-all"
                >
                    Leer artículo
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </article>
    );
}
