import axios from 'axios';
import { githubRepo } from '@/lib/data.tsx';

export async function fetchGithubStars(): Promise<number> {
    return (
        await axios.get(
            `https://api.github.com/repos/${githubRepo.author}/${githubRepo.repo}`,
        )
    ).data.stargazers_count;
}
