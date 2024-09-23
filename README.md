# Hello there👋
```typescript
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
                level: 'Native'
            },
            {
                language: 'English',
                level: 'Fluent'
            }
        ];

        this.stack = {
            frontend: [
                'React', 'Next.js', 'Svelte', 'SvelteKit', 'TailwindCSS',
                'Redux', 'RTK Query', 'Tanstack Query',
                'Framer-Motion', 'Styled-Components', 'ESLint', 'Prettier',
                'Husky', 'Jest', 'HTML', 'CSS', 'JavaScript', 'TypeScript',
                'Vite', 'Webpack'
            ],

            backend: [
                'FastAPI', 'Flask', 'SQLite', 'PostgreSQL', 'MongoDB',
                'SQLAlchemy', 'Alembic', 'pylint', 'pytest', 'poetry', 'python'
            ],

            misc: [
                'Docker', 'Git', 'PyQt5', 'PyGame', 'BS4', 'Selenium', 'Forge',
                'LaTeX', 'GitHub Actions', 'GitLab CI/CD'
            ]
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

```

## 📝 Links
* Personal website: https://dmhd6219.site/
* Telegram: https://t.me/dmhd6219
* Last.FM; https://last.fm/user/dmhd

## 🔧 Technologies & Tools

### Languages:
![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white)
![](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Frameworks:
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00)
![](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![](https://img.shields.io/badge/FastAPI-000000?style=for-the-badge&logo=fastapi&logoColor=white)

### Tools:
![](https://img.shields.io/badge/docker-369cee?style=for-the-badge&logo=docker&logoColor=white)
![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![](https://img.shields.io/badge/pylint-000?style=for-the-badge&logo=pylint&logoColor=white)
![](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![](https://img.shields.io/badge/LaTeX-1f425f?style=for-the-badge&logo=latex)