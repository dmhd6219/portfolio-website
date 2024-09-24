import { Separator } from '@/components/ui/separator.tsx';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="py-4 flex justify-between items-center">
                <div>dmhd6219</div>
                <nav>
                    <ul className="flex items-center gap-x-6">
                        <li>
                            <Link to="#home">Home</Link>
                        </li>
                        <li>
                            <Link to="#about">About</Link>
                        </li>
                        <li>
                            <Link to="#projects">Projects</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Separator className="text-gray-400" />
        </header>
    );
}
