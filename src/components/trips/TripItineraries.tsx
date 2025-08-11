import React from "react"
import FlightCard from "../flights/FlightCard.tsx";
import HotelCard from "../hotels/HotelCard.tsx";
import ActivitiesCard from "../activities/ActivitiesCard.tsx";
import {ActivityIcon, HotelIcon, PlaneIcon} from "lucide-react";

const TripItineraries: React.FC = () => {
    return (
        <>
            <div className="mt-6 p-6">
                <h2 className="text-lg font-semi-bold mb-4">Trip Itineraries</h2>
                <h4 className="text-sm text-blue-500">Your trip itineraries are placed there</h4>
            </div>
            <div className="mt-6 p-6 bg-[#F0F2F5]">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <PlaneIcon className="w-5 h-5"/>
                        <h2>Flights</h2>
                    </div>
                    <button className="text-sm text-blue-500 bg-white px-5 py-2.5 ">Add flights</button>
                </div>
                <div className="mb-6">
                    <FlightCard />
                </div>
                <div className="mb-6">
                    <FlightCard />
                </div>
            </div>
            <div className="mt-6 p-6 bg-[#344054]">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <HotelIcon className="w-5 h-5 text-white"/>
                        <h2 className="text-white">Hotels</h2>
                    </div>
                    <button className="text-sm text-blue-500 bg-white px-5 py-2.5">Add hotels</button>
                </div>
                <div className="mb-6">
                    <HotelCard />
                </div>
                <div className="mb-6">
                    <HotelCard />
                </div>
            </div>
            <div className="mt-6 p-6 bg-[#0054E4]">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <ActivityIcon className="w-5 h-5 text-white"/>
                        <h2 className="text-white">Activities</h2>
                    </div>
                    <button className="text-sm text-blue-500 bg-white px-5 py-2.5">Add Activities</button>
                </div>
                <div className="mb-6">
                    <ActivitiesCard />
                </div>
                <div className="mb-6">
                    <ActivitiesCard />
                </div>
            </div>
        </>
    )
}
export default TripItineraries