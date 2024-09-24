import { Separator } from '@/components/ui/separator.tsx';
import { Link } from 'react-router-dom';
import { me } from '@/lib/data.ts';

export default function Footer() {
    return (
        <footer>
            <Separator className="text-gray-400" />
            <div className="py-4 flex justify-between items-center">
                <Link to="/">{me.default + me.colored}</Link>
            </div>
        </footer>
    );
}
