class FrontendDeveloper {
    name: string;
    city: string;
    website: string;
    role: string;
    spokenLanguages: { language: string; level: string }[];
    stack: { [K in string]: string[] };

    constructor() {
        this.name = 'Sviatoslav Sviatkin';
        this.city = 'Innopolis';
        this.website = 'https://dmhd6219.site/';

        this.role = 'Fullstack Developer';

        this.spokenLanguages = [
            {
                language: 'Russian',
                level: 'Native',
            },
            {
                language: 'English',
                level: 'Fluent',
            },
        ];

        this.stack = {
            frontend: [
                'React',
                'Next.js',
                'Svelte',
                'SvelteKit',
                'TailwindCSS',
                'Redux',
                'RTK Query',
                'Tanstack Query',
                'Framer-Motion',
                'Styled-Components',
                'ESLint',
                'Prettier',
                'Husky',
                'Jest',
                'HTML',
                'CSS',
                'JavaScript',
                'TypeScript',
                'Vite',
                'Webpack',
            ],

            backend: [
                'FastAPI',
                'Flask',
                'SQLite',
                'PostgreSQL',
                'MongoDB',
                'SQLAlchemy',
                'Alembic',
                'pylint',
                'pytest',
                'poetry',
                'python',
            ],

            misc: [
                'Docker',
                'Git',
                'PyQt5',
                'PyGame',
                'BS4',
                'Selenium',
                'Forge',
                'LaTeX',
                'GitHub Actions',
                'GitLab CI/CD',
            ],
        };
    }

    sayHi() {
        console.log(`Hello! My name is ${this.name} and I am a ${this.role}. 
        Currently I live in ${this.city}. 
        You can see my projects here or on ${this.website}.`);
    }
}

const me = new FrontendDeveloper();
me.sayHi();
