import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BeachScene from './components/BeachScene';
import TripDetails from './components/TripDetails';
import ActivityCards from './components/ActivityCards.tsx';
import TripPlanningPage from './components/TripPlanningPage.tsx';
import TripItineraries from "./components/TripItineraries.tsx";
import FlightSearch from "./components/FlightSearch.tsx";

const Layout: React.FC = () => (
    <div className="bg-custom-gray min-h-screen font-sans">
        <Header />
        <div className="flex flex-col lg:flex-row pt-4 lg:pt-8">
            <div className="p-2 lg:p-4 order-2 lg:order-1">
                <Sidebar />
            </div>
            <div className="flex-1 mx-2 lg:ml-4 lg:mr-4 bg-white rounded-lg shadow-sm order-1 lg:order-2 h-fit ">
                <main className="p-3 sm:p-4 lg:p-6 space-y-4">
                    <Outlet />
                </main>
            </div>
        </div>
    </div>
);

const LandingPage = () => (
    <>
        <BeachScene />
        <TripDetails />
        <ActivityCards />
        <TripItineraries />
        <TripPlanningPage />
    </>
);

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="flights" element={<FlightSearch />} />
            </Route>
        </Routes>
    );
};

export default App;
