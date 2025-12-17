import './Layout.css'
import { NavLink, Outlet } from 'react-router'
import {Home, Clapperboard} from 'lucide-react'

export default function Layout() {
    return (
        <div className='layout'>
            <div className='navbar'>
                <div className='bar'>
                    <NavLink to="/"><Home /></NavLink>
                    <NavLink to="/items"><Clapperboard /></NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    );
}