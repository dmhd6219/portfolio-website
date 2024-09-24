import { Outlet } from 'react-router-dom';
import Header from '@/components/router/portfolio/header.tsx';
import Footer from '@/components/router/portfolio/footer.tsx';

export default function PortfolioLayout() {
    return (
        <div className="container flex flex-col text-white h-full">
            <Header />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
