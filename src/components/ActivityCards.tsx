import React from 'react';

const ActivityCards: React.FC = () => {
    return (
        <div className="flex flex-col sm:flex-row mt-4 sm:mt-6 gap-3 sm:gap-2 sm:justify-start">
            <div className="bg-[#000031] p-4 rounded-[4px] w-[270px] h-[193px]">
                <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                    Activities
                </h3>
                <p className="text-white text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                    Build, personalize, and optimize your itineraries with our trip planner.
                </p>
                <button className="bg-blue-500 text-white px-8 py-2 sm:px-4 sm:py-2 rounded font-medium hover:bg-purple-600 transition-colors text-sm w-full">
                    Add Activities
                </button>
            </div>

            <div className="bg-[#E7F0FF] p-4 rounded-[4px] w-[270px] h-[193px]">
                <h3 className="text-black font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                    Hotels
                </h3>
                <p className="text-black text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                    Build, personalize, and optimize your itineraries with our trip planner.
                </p>
                <button className="bg-blue-500 text-white px-8 py-2 rounded font-medium hover:bg-purple-600 transition-colors text-sm w-full">
                    Add Hotels
                </button>
            </div>

            <div className="bg-[#0D6EFD] p-4 rounded-[4px] w-[270px] h-[193px]">
                <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                    Flights
                </h3>
                <p className="text-white text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                    Build, personalize, and optimize your itineraries with our trip planner.
                </p>
                <button className="bg-white text-blue-500 border-2 border-white px-8 py-2 rounded font-medium hover:bg-purple-50 transition-colors text-sm w-full">
                    Add Flights
                </button>
            </div>
        </div>
    );
};

export default ActivityCards;