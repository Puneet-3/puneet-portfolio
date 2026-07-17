import './globals.css';

export const metadata = {
    title: 'Puneet Panwar — AI/ML Engineer & Frontend Developer',
    description: 'Portfolio of Puneet Panwar — AI & ML Engineer, Frontend Developer, and AI Automation Specialist. Explore projects in NLP, Computer Vision, RAG Systems, and modern web applications built with Next.js, React, and Python.',
    keywords: ['AI Engineer', 'ML Engineer', 'Frontend Developer', 'Next.js', 'React', 'Python', 'NLP', 'Computer Vision', 'Portfolio', 'Puneet Panwar'],
    authors: [{ name: 'Puneet Panwar', url: 'https://github.com/Puneet-3' }],
    creator: 'Puneet Panwar',
    openGraph: {
        title: 'Puneet Panwar — AI/ML Engineer & Frontend Developer',
        description: 'Explore projects in NLP, Computer Vision, RAG Systems, and modern web applications. Open to work.',
        url: 'https://puneetpanwar.dev',
        siteName: 'Puneet Panwar Portfolio',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Puneet Panwar — AI/ML Engineer & Frontend Developer',
        description: 'Portfolio of AI/ML and frontend projects. Open to work.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Puneet Panwar',
        jobTitle: 'AI/ML Engineer & Frontend Developer',
        url: 'https://puneetpanwar.dev',
        sameAs: [
            'https://github.com/Puneet-3',
            'https://linkedin.com/in/puneet-panwar',
        ],
        alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'VIT Bhopal University',
        },
        knowsAbout: ['Machine Learning', 'Natural Language Processing', 'React', 'Next.js', 'Python', 'AI Automation'],
    };

    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="dark-mode">
                {children}
            </body>
        </html>
    );
}
