import React, { useState } from 'react';
import user from '../../assets/face.png'
import { LogoIcon, SearchIcon, HomeIcon, DashboardIcon, WalletIcon, PlanTripIcon, CommissionIcon, BellIcon,
    CartIcon, CreateIcon, ChevronDownIcon, MenuIcon, CloseIcon } from '../../icons';
import { useNavigate } from "react-router-dom";

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, onClick }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors px-2 py-1 rounded-md ${
            active ? 'font-bold text-slate-800' : 'font-medium'
        }`}
    >
        <div className="w-6 h-6">{icon}</div>
        <span className="text-xs tracking-tight">{label}</span>
    </button>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (label: string) => {
        const routes: { [key: string]: string } = {
            'Home': '/',
            'Dashboard': '/dashboard',
            'Wallet': '/wallet',
            'Plan a trip': '/plan-trip',
            'Commission for life': '/commission'
        };

        const route = routes[label];
        if (route) {
            navigate(route);
        }
    };

    const navLinks = [
        { icon: <HomeIcon />, label: 'Home' },
        { icon: <DashboardIcon />, label: 'Dashboard' },
        { icon: <WalletIcon />, label: 'Wallet' },
        { icon: <PlanTripIcon />, label: 'Plan a trip', active: true },
        { icon: <CommissionIcon />, label: 'Commission for life' },
    ];

    return (
        <header className="bg-white text-slate-800 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-3 sm:px-4">
                <div className="flex items-center justify-between h-16 sm:h-20">

                    <div className="flex items-center gap-2 sm:gap-4">
                        <LogoIcon />
                        <div className="hidden md:flex items-center relative w-48 lg:w-72">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <SearchIcon />
                            </div>
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-slate-100 w-full rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <nav className="hidden lg:flex items-center gap-4">
                        {navLinks.map((link) => (
                            <NavItem
                                key={link.label}
                                icon={link.icon}
                                label={link.label}
                                active={link.active}
                                onClick={() => handleNavigation(link.label)}
                            />
                        ))}
                    </nav>

                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="hidden lg:flex items-center gap-4">
                            <div className="h-8 w-px bg-slate-200"></div>
                            <button className="bg-blue-600 text-white font-semibold text-sm px-3 sm:px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Subscribe
                            </button>
                            <a href="#" className="flex flex-col items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors">
                                <BellIcon />
                                <span className="text-xs tracking-tight font-medium">Notification</span>
                            </a>
                            <a href="#" className="flex flex-col items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors">
                                <CartIcon />
                                <span className="text-xs tracking-tight font-medium">Carts</span>
                            </a>
                            <a href="#" className="flex flex-col items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors">
                                <CreateIcon />
                                <span className="text-xs tracking-tight font-medium">Create</span>
                            </a>
                        </div>

                        <div className="flex items-center gap-1 sm:gap-2">
                            <img
                                src={ user }
                                alt="User profile"
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow"
                            />
                            <button className="text-slate-500 hover:text-slate-800">
                                <ChevronDownIcon />
                            </button>
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-1.5 sm:p-2 rounded-md text-slate-600 hover:bg-slate-100"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden bg-white shadow-md absolute top-16 sm:top-20 left-0 w-full">
                    <div className="px-3 sm:px-4 pt-2 pb-4 border-t border-slate-200">
                        <div className="flex items-center relative w-full mb-4">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <SearchIcon />
                            </div>
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-slate-100 w-full rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <nav className="grid grid-cols-2 sm:grid-cols-3 gap-y-4">
                            {navLinks.map((link) => (
                                <NavItem
                                    key={link.label}
                                    icon={link.icon}
                                    label={link.label}
                                    active={link.active}
                                    onClick={() => handleNavigation(link.label)}
                                />
                            ))}
                        </nav>
                        <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-4">
                            <button className="bg-blue-600 text-white font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors w-full">
                                Subscribe
                            </button>
                            <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                                <BellIcon />
                                <span className="font-medium">Notification</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                                <CartIcon />
                                <span className="font-medium">Carts</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                                <CreateIcon />
                                <span className="font-medium">Create</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;