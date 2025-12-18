import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { blogPosts } from '../Blog';

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { t, isRTL, language } = useLanguage();
    const navigate = useNavigate();

    const post = blogPosts.find(p => p.slug === slug);
    const content = post ? (language === 'ar' ? post.ar : post.en) : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (!post || !content) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-dark">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        {language === 'ar' ? 'المقال غير موجود' : 'Post Not Found'}
                    </h1>
                    <Link to="/blog" className="text-brand-primary hover:underline">
                        ← {language === 'ar' ? 'العودة للمدونة' : 'Back to Blog'}
                    </Link>
                </div>
            </div>
        );
    }

    // Get related posts (same category, different post)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 2);

    return (
        <div className={`min-h-screen bg-brand-dark ${isRTL ? 'font-arabic' : ''}`}>
            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 bg-brand-primary"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Back Link */}
                    <Link
                        to="/blog"
                        className={`inline-flex items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                        <i className={`fa-solid ${isRTL ? 'fa-arrow-right' : 'fa-arrow-left'}`}></i>
                        <span>{language === 'ar' ? 'العودة للمدونة' : 'Back to Blog'}</span>
                    </Link>

                    {/* Post Header */}
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Icon */}
                        <div className="text-8xl mb-8">{post.image}</div>

                        {/* Meta */}
                        <div className={`flex items-center justify-center gap-4 text-sm text-gray-500 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <span>{formatDate(post.date)}</span>
                            <span>•</span>
                            <span>{post.readTime} {language === 'ar' ? 'قراءة' : 'read'}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            {content.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {content.excerpt}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <article className={`max-w-3xl mx-auto prose prose-invert prose-lg ${isRTL ? 'text-right' : ''}`}>
                        <div className="text-gray-300 leading-relaxed space-y-6">
                            {content.content.split('\n\n').map((paragraph, index) => {
                                // Handle bold headers
                                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                    return (
                                        <h3 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                                            {paragraph.replace(/\*\*/g, '')}
                                        </h3>
                                    );
                                }
                                // Handle headers with colons
                                if (paragraph.startsWith('**')) {
                                    const [header, ...rest] = paragraph.split(':**');
                                    return (
                                        <div key={index}>
                                            <h4 className="text-xl font-bold text-brand-primary mt-6 mb-3">
                                                {header.replace(/\*\*/g, '')}
                                            </h4>
                                            {rest.length > 0 && (
                                                <p className="text-gray-400">{rest.join('')}</p>
                                            )}
                                        </div>
                                    );
                                }
                                // Handle lists
                                if (paragraph.includes('\n- ')) {
                                    const items = paragraph.split('\n- ').filter(Boolean);
                                    return (
                                        <ul key={index} className={`space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                                            {items.map((item, i) => (
                                                <li key={i} className="text-gray-400 flex items-start gap-2">
                                                    <span className="text-brand-primary mt-1">•</span>
                                                    <span>{item.replace(/^\d+\.\s*/, '')}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                }
                                // Handle numbered lists
                                if (paragraph.match(/^\d\./)) {
                                    const items = paragraph.split('\n').filter(Boolean);
                                    return (
                                        <ol key={index} className={`space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                                            {items.map((item, i) => (
                                                <li key={i} className="text-gray-400 flex items-start gap-2">
                                                    <span className="text-brand-primary font-bold min-w-[20px]">{i + 1}.</span>
                                                    <span>{item.replace(/^\d+\.\s*/, '')}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    );
                                }
                                // Regular paragraph
                                return (
                                    <p key={index} className="text-gray-400 leading-relaxed">
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </div>
                    </article>
                </div>
            </section>

            {/* Share & CTA */}
            <section className="py-16 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        {/* Share */}
                        <div className={`flex items-center gap-4 mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <span className="text-gray-400">{language === 'ar' ? 'شارك هذا المقال:' : 'Share this article:'}</span>
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(content.title)}&url=${encodeURIComponent(window.location.href)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary/50 transition-all"
                            >
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary/50 transition-all"
                            >
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a
                                href={`https://wa.me/?text=${encodeURIComponent(content.title + ' ' + window.location.href)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all"
                            >
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>

                        {/* CTA */}
                        <div className="glass-card p-8 rounded-xl border border-brand-primary/20 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {language === 'ar' ? 'هل تريد مناقشة مشروعك؟' : 'Want to discuss your project?'}
                            </h3>
                            <p className="text-gray-400 mb-6">
                                {language === 'ar'
                                    ? 'تواصل معنا للحصول على استشارة مجانية حول ألعاب العلامات التجارية'
                                    : 'Contact us for a free consultation about branded gaming'
                                }
                            </p>
                            <a
                                href="https://wa.me/201288950926"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all"
                            >
                                <i className="fa-brands fa-whatsapp text-xl"></i>
                                <span>{language === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-black/50">
                    <div className="container mx-auto px-6">
                        <h2 className={`text-2xl font-bold text-white mb-8 ${isRTL ? 'text-right' : ''}`}>
                            {language === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {relatedPosts.map(relatedPost => {
                                const relatedContent = language === 'ar' ? relatedPost.ar : relatedPost.en;
                                return (
                                    <Link
                                        key={relatedPost.id}
                                        to={`/blog/${relatedPost.slug}`}
                                        className={`group glass-card p-6 rounded-xl border border-white/10 hover:border-brand-primary/30 transition-all ${isRTL ? 'text-right' : ''}`}
                                    >
                                        <div className="text-4xl mb-4">{relatedPost.image}</div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                                            {relatedContent.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm">{formatDate(relatedPost.date)}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default BlogPostPage;
