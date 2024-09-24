import Github from '@/assets/github.svg';
import Telegram from '@/assets/telegram.svg';
import Coffee from '@/assets/coffee.svg';
import LastFm from '@/assets/last-fm.svg';

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
    icon?: string;
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
        href: 'https://github.com/dmhd6219',
        title: 'GitHub',
        icon: Github,
    },
    {
        href: 'https://t.me/dmhd6219',
        title: 'Telegram',
        icon: Telegram,
    },
    {
        href: 'https://last.fm/user/dmhd',
        title: 'Last Fm',
        icon: LastFm,
    },
    {
        href: 'https://pay.cloudtips.ru/p/02da9349',
        title: 'Buy me a coffee',
        icon: Coffee,
    },
];
