export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
    coursesPerPage?: number;
};

const siteConfig: SiteConfig = {
    // logo: {
    //     src: '',
    //     alt: 'Site logo'
    // },
    title: 'Erik Grinn',
    // subtitle: 'Minimal Astro.js theme',
    description: 'Astro.js personal website',
    // image: {
    //     src: '/dante-preview.jpg',
    //     alt: 'Dante - Astro.js and Tailwind CSS theme'
    // },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        // {
        //     text: 'Courses',
        //     href: '/courses'
        // },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // },
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/erikgrinn/'
        },
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I'm **Erik Grinn**, a software engineer and web developer. I'm passionate about both creating intuitive interfaces and leveraging the data online to glean meaningful insights. I hold a Bachelor of Science in Computer Science from Oregon State University, and in my free time I try to practice programming on various projects. Within my blog you'll find how my journey is going, what I'm learning, and what I'm building.",
        // image: {
        //     src: '/hero.jpeg',
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to my Newsletter',
    //     text: 'All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8,
    coursesPerPage: 1
};

export default siteConfig;
