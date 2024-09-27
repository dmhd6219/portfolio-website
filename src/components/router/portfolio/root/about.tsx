import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import {
    ExternalLinkIcon,
    FileCodeIcon,
    LinkIcon,
    PinIcon,
    StarIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { city, githubRepo, links } from '@/lib/data.tsx';
import { fetchGithubStars } from '@/lib/api/github.tsx';
import { useEffect, useState } from 'react';
import { numberStars } from '@/lib/utils.ts';

export default function About() {
    const [stars, setStars] = useState(0);

    useEffect(() => {
        fetchGithubStars().then((stars) => setStars(stars));
    }, []);

    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Немного про меня</h1>
            <div className="w-full flex gap-x-4 items-stretch">
                {/*Левый блок*/}
                <div className="w-1/2 flex flex-col gap-y-4">
                    {/*Связь со мной*/}
                    <Card className="rounded-md">
                        <CardHeader className="text-foreground">
                            <div className="flex gap-x-3 items-center">
                                <LinkIcon size={20} /> Связь со мной
                            </div>
                        </CardHeader>
                        <CardContent className="text-muted-foreground flex flex-col gap-y-1.5">
                            {links.map((link) => (
                                <div className="flex gap-x-3 items-center">
                                    {link.icon}
                                    <Link to={link.href}>{link.title}</Link>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/*Звёзды*/}
                    <Link
                        to={`https://github.com/${githubRepo.author}/${githubRepo.repo}`}
                        target="_blank"
                        className=""
                    >
                        <Card className="rounded-md">
                            <CardHeader className="">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-x-3 items-center">
                                        <StarIcon size={20} /> Поставь мне
                                        звезду :3
                                    </div>
                                    <ExternalLinkIcon size={20} />
                                </div>
                            </CardHeader>
                            <CardContent className="text-2xl font-bold text-foreground flex flex-col gap-y-1.5">
                                {stars} {numberStars(stars)}
                            </CardContent>
                        </Card>
                    </Link>
                </div>

                {/*Правый блок*/}
                <div className="w-1/2 flex flex-col gap-y-4">
                    <div className="flex gap-x-4">
                        {/*Доступен*/}
                        <Card className="w-1/2 rounded-md">
                            <CardContent className="text-muted-foreground pt-6 h-full flex flex-col gap-y-2 justify-center items-center">
                                <div className="flex justify-center">
                                    <span className="relative flex h-4 w-4">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex h-4 w-4 rounded-full bg-green-400"></span>
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold leading-none tracking-tight text-center">
                                    Доступен для предложений!
                                </h3>
                            </CardContent>
                        </Card>

                        {/*Локация*/}
                        <Card className="w-1/2 rounded-md">
                            <CardHeader className="">
                                <div className="flex gap-x-3 items-center">
                                    <PinIcon size={20} /> Локация
                                </div>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                <Link to={city.href} target="_blank">
                                    {city.name}
                                </Link>
                            </CardContent>
                        </Card>
                    </div>

                    {/*Стек*/}
                    <Card className="rounded-md flex-1">
                        <CardHeader className="text-foreground">
                            <div className="flex gap-x-3 items-center">
                                <FileCodeIcon size={20} /> Технические навыки
                            </div>
                        </CardHeader>
                        <CardContent className="text-muted-foreground flex flex-col gap-y-1.5"></CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
