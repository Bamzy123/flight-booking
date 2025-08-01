import React from 'react';

type IconProps = {
    className?: string;
};

export const AmericanAirlinesLogo: React.FC<IconProps> = ({ className }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>American Airlines</title>
        <path d="M11.696 9.24L8 10.638.304 12.738.001 11.3l8-3.899L12.001 5.2l7.696-2.201.303 1.438-8.001 3.899z" fill="#E81123"/>
        <path d="M12.304 14.76L16 13.362l7.696-2.101.303 1.438-8 3.9-4.001 2.199L.304 21.001.001 19.563l8-3.9 4.303-.904z" fill="#0078D2"/>
    </svg>
);
export const LogoIcon: React.FC = () => (
    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
        <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64.63 25.75C58.33 25.75 52.85 27.97 48.2 32.42V11.25H33.8V73.75C33.8 82.02 40.48 88.75 48.7 88.75C56.92 88.75 63.6 82.02 63.6 73.75C63.6 70.43 62.65 67.33 60.98 64.75H50.52V52.7H67.2C79.4 52.7 89 42.92 89 30.75C89 27.87 88.45 25.12 87.42 22.58C82.85 23.83 77.82 25.75 72.82 25.75H64.63Z" fill="white"/>
            <path d="M48.2 32.42C52.85 27.97 58.33 25.75 64.63 25.75H72.82C77.82 25.75 82.85 23.83 87.42 22.58C85.55 17.5 80.37 13.75 74.45 13.75C66.58 13.75 60.03 18.57 56.63 24.83L48.2 32.42Z" fill="white"/>
            <path d="M60.98 64.75C62.65 67.33 63.6 70.43 63.6 73.75C63.6 82.02 56.92 88.75 48.7 88.75C40.48 88.75 33.8 82.02 33.8 73.75V37.75H48.2V52.7H50.52V64.75H60.98Z" fill="white"/>
            <path d="M68 34.5L78.5 39L72.5 41L68 34.5Z" fill="#007BFF"/>
        </svg>
    </div>
);

export const SearchIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const HomeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
    </svg>
);

export const DashboardIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </svg>
);

export const WalletIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 3a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 12m15.75-3.375a4.5 4.5 0 0 0-9 0M12.75 2.25 12 12" />
        <circle cx="18" cy="12" r="1.5" fill="currentColor" />
    </svg>
);

export const PlanTripIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5M12 3.75v16.5" opacity="0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 6.75 1.5 1.5M18 6.75l-1.5 1.5m0 7.5 1.5 1.5m-15-1.5-1.5 1.5" opacity="0"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h4.5m8.25 0h-4.5m-3.75 9h4.5m8.25 0h-4.5" opacity="0.4"/>
        <path d="M7 6H2m5 5H2m18 0h-5m5-5h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4.5 9L6 10.5 9 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const CommissionIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 12 10.125 2.625 2.625 0 0 0 12 4.875Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.375 11.25c1.034 0 1.875.841 1.875 1.875v3.375c0 .622-.503 1.125-1.125 1.125h-7.5c-.622 0-1.125-.503-1.125-1.125V13.125c0-1.034.841-1.875 1.875-1.875h4.875Z" />
    </svg>
);


export const BellIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
    </svg>
);

export const CartIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
    </svg>
);

export const CreateIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const ChevronDownIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
        />
    </svg>
);

export const MenuIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

export const CloseIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);
