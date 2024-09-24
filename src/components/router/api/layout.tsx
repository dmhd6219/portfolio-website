import { Outlet } from 'react-router-dom';

export default function ApiLayout() {
    return (
        <div>
            <span>ApiLayout</span>
            <Outlet />
        </div>
    );
}
