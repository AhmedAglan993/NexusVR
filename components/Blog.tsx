import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface BlogPostData {
    id: string;
    slug: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
    en: {
        title: string;
        excerpt: string;
        content: string;
    };
    ar: {
        title: string;
        excerpt: string;
        content: string;
    };
}

export const blogPosts: BlogPostData[] = [
    {
        id: '1',
        slug: 'gaming-industry-middle-east-2025',
        image: '🎮',
        category: 'industry',
        date: '2024-12-15',
        readTime: '5 min',
        en: {
            title: 'The Rise of Gaming in the Middle East: 2025 Outlook',
            excerpt: 'The MENA gaming market is projected to reach $6 billion by 2025. Here\'s what brands need to know about this explosive growth.',
            content: `The Middle East and North Africa (MENA) region is experiencing unprecedented growth in the gaming industry. With a young, tech-savvy population and increasing smartphone penetration, the region has become a hotspot for gaming companies worldwide.

**Key Statistics:**
- 400+ million gamers in MENA
- 25% year-over-year growth
- Saudi Arabia leads with $1.8B market value
- UAE has highest per-capita gaming spend

**Why Brands Should Care:**
The gaming audience in MENA is highly engaged and represents a premium demographic. Unlike Western markets, MENA gamers show strong preference for mobile gaming and social experiences.

**Opportunities for Brands:**
1. Localized advergames for Ramadan campaigns
2. In-game advertising in popular titles
3. Esports sponsorships
4. Branded gaming experiences

The time to enter the MENA gaming market is now. Companies that establish presence early will have significant advantages as the market matures.`
        },
        ar: {
            title: 'صعود صناعة الألعاب في الشرق الأوسط: نظرة على 2025',
            excerpt: 'من المتوقع أن يصل سوق الألعاب في منطقة الشرق الأوسط وشمال أفريقيا إلى 6 مليار دولار بحلول 2025. إليك ما تحتاج العلامات التجارية معرفته.',
            content: `تشهد منطقة الشرق الأوسط وشمال أفريقيا نمواً غير مسبوق في صناعة الألعاب. مع وجود سكان شباب ومتمرسين تقنياً وزيادة انتشار الهواتف الذكية، أصبحت المنطقة نقطة جذب لشركات الألعاب حول العالم.

**إحصائيات رئيسية:**
- أكثر من 400 مليون لاعب في المنطقة
- نمو سنوي 25%
- السعودية تتصدر بقيمة سوق 1.8 مليار دولار
- الإمارات لديها أعلى إنفاق للفرد على الألعاب

**لماذا يجب أن تهتم العلامات التجارية:**
جمهور الألعاب في المنطقة متفاعل للغاية ويمثل شريحة ديموغرافية متميزة. على عكس الأسواق الغربية، يُظهر لاعبو المنطقة تفضيلاً قوياً لألعاب الموبايل والتجارب الاجتماعية.

**الفرص للعلامات التجارية:**
1. ألعاب إعلانية محلية لحملات رمضان
2. الإعلان داخل الألعاب الشهيرة
3. رعاية الرياضات الإلكترونية
4. تجارب الألعاب ذات العلامات التجارية

الوقت المناسب لدخول سوق الألعاب في المنطقة هو الآن. الشركات التي تؤسس وجودها مبكراً ستحصل على مزايا كبيرة مع نضوج السوق.`
        }
    },
    {
        id: '2',
        slug: 'ai-revolutionizing-game-development',
        image: '🤖',
        category: 'gameDev',
        date: '2024-12-10',
        readTime: '7 min',
        en: {
            title: 'How AI is Revolutionizing Game Development in 2025',
            excerpt: 'From procedural generation to NPC behavior, artificial intelligence is transforming how games are built and experienced.',
            content: `Artificial Intelligence is no longer just a feature in games—it's becoming fundamental to how games are created. Here's how AI is changing the game development landscape.

**AI in Game Creation:**
- **Procedural Content Generation:** AI can create infinite levels, textures, and assets
- **Automated Testing:** AI bots can test games faster than human QA teams
- **Asset Creation:** Tools like Midjourney and DALL-E are creating game art
- **Voice Synthesis:** AI-generated voice acting reduces production costs

**AI in Gameplay:**
- Smarter NPCs that learn from player behavior
- Dynamic difficulty adjustment
- Personalized game experiences
- Real-time language translation

**For Advergames and Brand Games:**
AI makes it possible to create sophisticated branded games at a fraction of the traditional cost. This democratizes game development for marketing campaigns.

**The Future:**
We're seeing AI-assisted game engines that can generate entire game levels from text descriptions. This will make branded gaming accessible to companies of all sizes.`
        },
        ar: {
            title: 'كيف يُحدث الذكاء الاصطناعي ثورة في تطوير الألعاب 2025',
            excerpt: 'من التوليد الإجرائي إلى سلوك الشخصيات، الذكاء الاصطناعي يُحوّل طريقة بناء الألعاب وتجربتها.',
            content: `الذكاء الاصطناعي لم يعد مجرد ميزة في الألعاب - بل أصبح أساسياً في طريقة إنشاء الألعاب. إليك كيف يُغير الذكاء الاصطناعي مشهد تطوير الألعاب.

**الذكاء الاصطناعي في إنشاء الألعاب:**
- **توليد المحتوى الإجرائي:** يمكن للذكاء الاصطناعي إنشاء مستويات وأنسجة وأصول لا نهائية
- **الاختبار الآلي:** روبوتات الذكاء الاصطناعي تختبر الألعاب أسرع من فرق ضمان الجودة البشرية
- **إنشاء الأصول:** أدوات مثل Midjourney وDALL-E تُنشئ فن الألعاب
- **تخليق الصوت:** التمثيل الصوتي المُولّد بالذكاء الاصطناعي يُقلل تكاليف الإنتاج

**الذكاء الاصطناعي في اللعب:**
- شخصيات أذكى تتعلم من سلوك اللاعب
- ضبط الصعوبة الديناميكي
- تجارب لعب مُخصصة
- ترجمة لغوية فورية

**للألعاب الإعلانية وألعاب العلامات التجارية:**
الذكاء الاصطناعي يجعل من الممكن إنشاء ألعاب علامات تجارية متطورة بجزء من التكلفة التقليدية. هذا يُديمقرط تطوير الألعاب لحملات التسويق.

**المستقبل:**
نرى محركات ألعاب مدعومة بالذكاء الاصطناعي يمكنها توليد مستويات كاملة من أوصاف نصية. هذا سيجعل ألعاب العلامات التجارية متاحة للشركات من جميع الأحجام.`
        }
    },
    {
        id: '3',
        slug: 'branded-games-marketing-strategy',
        image: '🎯',
        category: 'branding',
        date: '2024-12-05',
        readTime: '6 min',
        en: {
            title: 'Why Branded Games Outperform Traditional Advertising',
            excerpt: 'Studies show branded games achieve 3x higher engagement than traditional ads. Here\'s the science behind gamified marketing.',
            content: `Traditional advertising is losing effectiveness. Banner blindness is real, and consumers are increasingly skeptical of promotional content. Enter branded games—a marketing approach that audiences actually enjoy.

**The Numbers Don't Lie:**
- 3x higher engagement than traditional ads
- 47% better brand recall
- 28% increase in purchase intent
- Average session time: 8+ minutes

**Why Games Work:**
1. **Active Participation:** Players are engaged, not passive
2. **Positive Association:** Fun experiences create positive brand feelings
3. **Voluntary Engagement:** Players choose to interact
4. **Shareability:** Good games get shared organically

**Types of Branded Games:**
- **Advergames:** Custom games built around brand messaging
- **Gamified Experiences:** Adding game elements to existing content
- **Reward Games:** Loyalty programs with gaming mechanics
- **Social Games:** Multiplayer experiences for brand communities

**Best Practices:**
- Keep branding subtle—fun comes first
- Ensure mobile-first design
- Include shareable moments
- Track meaningful metrics beyond downloads`
        },
        ar: {
            title: 'لماذا تتفوق الألعاب ذات العلامات التجارية على الإعلانات التقليدية',
            excerpt: 'تُظهر الدراسات أن الألعاب ذات العلامات التجارية تحقق تفاعلاً أعلى 3 مرات من الإعلانات التقليدية. إليك العلم وراء التسويق بالألعاب.',
            content: `الإعلانات التقليدية تفقد فعاليتها. عمى البانر حقيقي، والمستهلكون متشككون بشكل متزايد في المحتوى الترويجي. هنا تأتي الألعاب ذات العلامات التجارية—نهج تسويقي يستمتع به الجمهور فعلاً.

**الأرقام لا تكذب:**
- تفاعل أعلى 3 مرات من الإعلانات التقليدية
- تذكر أفضل للعلامة التجارية بنسبة 47%
- زيادة 28% في نية الشراء
- متوسط وقت الجلسة: 8+ دقائق

**لماذا الألعاب تنجح:**
1. **المشاركة النشطة:** اللاعبون متفاعلون، ليسوا سلبيين
2. **الارتباط الإيجابي:** التجارب الممتعة تخلق مشاعر إيجابية تجاه العلامة
3. **المشاركة الطوعية:** اللاعبون يختارون التفاعل
4. **قابلية المشاركة:** الألعاب الجيدة تُشارك عضوياً

**أنواع الألعاب ذات العلامات التجارية:**
- **الألعاب الإعلانية:** ألعاب مُصممة حول رسالة العلامة
- **التجارب المُلعبة:** إضافة عناصر اللعب للمحتوى الموجود
- **ألعاب المكافآت:** برامج الولاء مع آليات اللعب
- **الألعاب الاجتماعية:** تجارب متعددة اللاعبين لمجتمعات العلامة

**أفضل الممارسات:**
- اجعل العلامة التجارية خفية—المتعة أولاً
- تأكد من التصميم للموبايل أولاً
- أدرج لحظات قابلة للمشاركة
- تتبع مقاييس ذات معنى تتجاوز التحميلات`
        }
    },
    {
        id: '4',
        slug: 'gamification-marketing-campaigns',
        image: '🚀',
        category: 'branding',
        date: '2024-11-28',
        readTime: '5 min',
        en: {
            title: 'Gamification in Marketing: Beyond Points and Badges',
            excerpt: 'Effective gamification goes deeper than surface-level rewards. Learn how to create marketing campaigns that truly engage.',
            content: `Gamification has become a buzzword in marketing, but most implementations miss the mark. True gamification isn't about slapping points on everything—it's about understanding human motivation.

**The Psychology Behind Gamification:**
- **Autonomy:** Players want meaningful choices
- **Mastery:** Progressive skill development feels rewarding
- **Purpose:** Actions should connect to meaningful outcomes
- **Social Connection:** Competition and cooperation drive engagement

**Common Gamification Mistakes:**
1. Overcomplicating the rules
2. Rewards that don't match effort
3. Ignoring cultural differences (critical in MENA)
4. No clear progression or goals

**Successful Gamification Elements:**
- **Progress Bars:** Visual representation of advancement
- **Challenges:** Time-limited goals that create urgency
- **Leaderboards:** Social competition (when appropriate)
- **Unlockables:** Exclusive content that rewards engagement
- **Streaks:** Encouraging consistent interaction

**Ramadan Campaign Example:**
A fashion brand created a daily challenge game during Ramadan where users collected discount codes through gameplay. Results: 150K plays, 45% engagement rate, and 12% conversion to purchase.

**Getting Started:**
Start simple. A well-designed single mechanic beats a complex system that confuses users.`
        },
        ar: {
            title: 'التلعيب في التسويق: أبعد من النقاط والشارات',
            excerpt: 'التلعيب الفعال يتجاوز المكافآت السطحية. تعلم كيف تُنشئ حملات تسويقية تُشرك الجمهور حقاً.',
            content: `أصبح التلعيب كلمة رائجة في التسويق، لكن معظم التطبيقات تُخطئ الهدف. التلعيب الحقيقي ليس عن إضافة نقاط لكل شيء—إنه عن فهم الدوافع البشرية.

**علم النفس وراء التلعيب:**
- **الاستقلالية:** اللاعبون يريدون خيارات ذات معنى
- **الإتقان:** التطور التدريجي في المهارات يشعر بالمكافأة
- **الغرض:** الأفعال يجب أن ترتبط بنتائج ذات معنى
- **الارتباط الاجتماعي:** المنافسة والتعاون يدفعان التفاعل

**أخطاء التلعيب الشائعة:**
1. تعقيد القواعد بشكل مفرط
2. مكافآت لا تتناسب مع الجهد
3. تجاهل الاختلافات الثقافية (حاسم في المنطقة)
4. عدم وجود تقدم أو أهداف واضحة

**عناصر التلعيب الناجحة:**
- **أشرطة التقدم:** تمثيل بصري للتقدم
- **التحديات:** أهداف محدودة الوقت تخلق إلحاحاً
- **لوحات المتصدرين:** منافسة اجتماعية (عند الملاءمة)
- **المحتوى القابل للفتح:** محتوى حصري يُكافئ التفاعل
- **السلاسل:** تشجيع التفاعل المستمر

**مثال حملة رمضان:**
أنشأت علامة أزياء لعبة تحديات يومية خلال رمضان حيث جمع المستخدمون أكواد خصم من خلال اللعب. النتائج: 150 ألف مرة لعب، معدل تفاعل 45%، وتحويل 12% للشراء.

**البداية:**
ابدأ بسيطاً. آلية واحدة مُصممة جيداً تتفوق على نظام معقد يُربك المستخدمين.`
        }
    }
];

const Blog: React.FC = () => {
    const { t, isRTL, language } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', en: 'All', ar: 'الكل' },
        { id: 'gameDev', en: 'Game Development', ar: 'تطوير الألعاب' },
        { id: 'branding', en: 'Brand Gaming', ar: 'ألعاب العلامات التجارية' },
        { id: 'industry', en: 'Industry News', ar: 'أخبار الصناعة' },
    ];

    const filteredPosts = activeCategory === 'all'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <section id="blog" className="py-24 bg-black relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 ${isRTL ? 'font-arabic' : ''}`}>
                    <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block">
                        {t.blog?.sectionTag || 'Insights'}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        {t.blog?.title || 'GAME DEV'}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                            {t.blog?.titleHighlight || 'BLOG'}
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        {t.blog?.subtitle || 'Industry insights, case studies, and thought leadership from our team'}
                    </p>
                </div>

                {/* Category Filter */}
                <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2 rounded-full text-sm font-mono transition-all ${activeCategory === cat.id
                                    ? 'bg-brand-primary text-black'
                                    : 'bg-white/5 border border-white/10 text-gray-400 hover:border-brand-primary/50'
                                }`}
                        >
                            {language === 'ar' ? cat.ar : cat.en}
                        </button>
                    ))}
                </div>

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {filteredPosts.map((post) => {
                        const content = language === 'ar' ? post.ar : post.en;
                        return (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className={`group glass-card rounded-xl overflow-hidden border border-white/10 hover:border-brand-primary/30 transition-all duration-300 hover:-translate-y-1 ${isRTL ? 'text-right' : ''}`}
                            >
                                {/* Post Image/Icon */}
                                <div className="h-48 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center text-7xl">
                                    {post.image}
                                </div>

                                {/* Post Content */}
                                <div className="p-6">
                                    {/* Meta */}
                                    <div className={`flex items-center gap-4 text-sm text-gray-500 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                        <span>{formatDate(post.date)}</span>
                                        <span>•</span>
                                        <span>{post.readTime} {language === 'ar' ? 'قراءة' : 'read'}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                                        {content.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                                        {content.excerpt}
                                    </p>

                                    {/* Read More */}
                                    <div className={`flex items-center gap-2 text-brand-primary text-sm font-mono ${isRTL ? 'flex-row-reverse' : ''}`}>
                                        <span>{t.blog?.readMore || 'Read More'}</span>
                                        <i className={`fa-solid ${isRTL ? 'fa-arrow-left' : 'fa-arrow-right'} group-hover:translate-x-1 transition-transform`}></i>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Blog;
