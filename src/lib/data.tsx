import MailIcon from '@/components/icons/mail.tsx';
import TelegramIcon from '@/components/icons/telegram.tsx';
import GithubIcon from '@/components/icons/github.tsx';
import LastFmIcon from '@/components/icons/lastfm.tsx';
import CoffeeIcon from '@/components/icons/coffee.tsx';
import { ReactElement } from 'react';

export const techStack = [
    'React',
    'Next.js',
    'Svelte',
    'SvelteKit',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Styled-Components',
    'Framer-Motion',
    'shadcn-ui',
    'Ant-Design',
    'ESLint',
    'Prettier',
    'husky',
    'lint-staged',
    'Redux',
    'RTK Query',
    'Tanstack Query',
    'Python',
    'FastApi',
    'Flask',
    'SQLite',
    'PostgreSQL',
    'MongoDB',
    'SQLAlchemy',
    'Alembic',
    'PyPy',
    'poetry',
    'pylint',
    'GitHub Actions',
    'GitLab CI/CD',
    'Docker',
    'Git',
];

export const githubRepo = {
    author: 'dmhd6219',
    repo: 'portfolio-website',
};

export const city = {
    name: 'Иннополис',
    href: 'https://ru.wikipedia.org/wiki/Иннополис',
};

interface Nickname {
    default: string;
    colored: string;
}

export const me: Nickname = {
    default: 'dmhd',
    colored: '6219',
};

interface Link {
    href: string;
    title: string;
    icon?: ReactElement;
}

export const navLinks: Link[] = [
    {
        href: '#about',
        title: 'Про меня',
    },
    {
        href: '#projects',
        title: 'Проекты',
    },
];

export const links: Link[] = [
    {
        href: 'mailto:svyatoslavsvyatkin@yandex.ru',
        title: 'Почта',
        icon: <MailIcon color="muted-foreground" />,
    },
    {
        href: 'https://t.me/dmhd6219',
        title: 'Telegram',
        icon: <TelegramIcon color="muted-foreground" />,
    },
    {
        href: 'https://github.com/dmhd6219',
        title: 'GitHub',
        icon: <GithubIcon color="muted-foreground" />,
    },
    {
        href: 'https://last.fm/user/dmhd',
        title: 'LastFm',
        icon: <LastFmIcon color="muted-foreground" />,
    },
    {
        href: 'https://pay.cloudtips.ru/p/02da9349',
        title: 'Buy me a coffee',
        icon: <CoffeeIcon color="muted-foreground" />,
    },
];
