import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Building, Plane, GraduationCap, FileText, Briefcase,
    Plus,
    ChevronDown,
    Menu,
    X,
    Package
} from 'lucide-react';

const MenuItems = ({ collapsed, isMobile }: { collapsed?: boolean; isMobile?: boolean }) => {
    const navigate = useNavigate();

    const handleNavigation = (label: string) => {
        switch (label) {
            case 'Flights':
                navigate('/flights');
                break;
            default:
                break;
        }
    };

    const menuItems = [
        { label: 'Activities', icon: <Activity size={20} className="text-gray-600" />, ariaLabel: 'View Activities' },
        { label: 'Hotels', icon: <Building size={20} className="text-gray-600" />, ariaLabel: 'Browse Hotels' },
        { label: 'Flights', icon: <Plane size={20} className="text-gray-600" />, ariaLabel: 'Search Flights' },
        { label: 'Study', icon: <GraduationCap size={20} className="text-gray-600" />, ariaLabel: 'Study Options' },
        { label: 'Visa', icon: <FileText size={20} className="text-gray-600" />, ariaLabel: 'Visa Services' },
        { label: 'Immigration', icon: <Briefcase size={20} className="text-gray-600" />, ariaLabel: 'Immigration Services' },
        { label: 'Medical', icon: <Plus size={20} className="text-gray-600" />, ariaLabel: 'Medical Services' },
        { label: 'Vacation Packages', icon: <Package size={20} className="text-gray-600" />, ariaLabel: 'Browse Vacation Packages' },
    ];

    return (
        <nav className="space-y-2 px-4 py-4">
            {menuItems.map((item) => (
                <button
                    key={item.label}
                    onClick={() => handleNavigation(item.label)}
                    className="flex items-center w-full p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    aria-label={item.ariaLabel}
                >
                    <div className="flex-shrink-0">{item.icon}</div>
                    {!collapsed && !isMobile && (
                        <span className="ml-3 text-gray-700 text-sm font-medium">{item.label}</span>
                    )}
                </button>
            ))}
        </nav>
    );
};

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(() => {
        return localStorage.getItem('sidebarCollapsed') === 'true';
    });

    const toggleCollapsed = () => {
        const newState = !collapsed;
        setCollapsed(newState);
        localStorage.setItem('sidebarCollapsed', String(newState));
    };

    return (
        <aside
            className={`bg-white border border-gray-200 rounded-xl shadow-sm h-fit transition-all duration-300 ${
                collapsed ? 'w-12 sm:w-16' : 'w-full sm:w-64'
            }`}
        >
            <div className="md:hidden flex items-center justify-between px-2 sm:px-4 py-2">
                <button
                    onClick={toggleCollapsed}
                    aria-label={collapsed ? 'Expand menu' : 'Collapse menu'}
                    className="text-gray-600"
                >
                    {collapsed ? <Menu size={20} className="sm:w-6 sm:h-6" /> : <X size={20} className="sm:w-6 sm:h-6" />}
                </button>
            </div>

            <div className="hidden md:flex flex-col">
                <MenuItems collapsed={collapsed} />

                <div className="px-4 pb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                        <button className="flex items-center justify-between w-full" aria-label="Access personal account">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">Go</div>
                                {!collapsed && (
                                    <span className="text-gray-700 text-sm font-medium">Personal Account</span>
                                )}
                            </div>
                            <ChevronDown size={16} className="text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`block md:hidden transition-all duration-300 ${
                    collapsed ? 'h-0 overflow-hidden' : 'h-auto'
                }`}
            >
                <MenuItems collapsed={true} isMobile={true} />
            </div>
        </aside>
    );
}
