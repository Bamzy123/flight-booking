import React from 'react';
import profile from '../assets/profile.png';

const TripDetails: React.FC = () => {
    return (
        <div className="w-full rounded overflow-hidden">

            <div className="px-2 py-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                    <div className="flex items-center gap-2 text-amber-700 bg-amber-50 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-lg">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z" />
                        </svg>
                        <span className="font-medium text-sm sm:text-base">21 March 2024 → 21 April 2024</span>
                    </div>

                    <div className="flex flex-col items-center sm:items-end gap-3 sm:gap-4">
                        <div className="flex items-center gap-2">
                            <button className="bg-blue-50 hover:bg-blue-100 p-1.5 sm:p-2 rounded-lg transition-colors">
                                <div className="relative">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600 absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                            </button>
                            <span className="text-gray-600 text-base sm:text-lg">...</span>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-200">
                                <img
                                    src={ profile }
                                    alt="User profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-6 sm:w-8 h-0.5 bg-white"></div>

                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-blue-300 flex items-center justify-center">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-3 sm:px-4 py-2 sm:py-3">
                <div className='font-semibold text-lg sm:text-xl lg:text-2xl'>
                    Bahamas Family Trip
                </div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">
                    New York, United States of America | Solo Trip
                </div>
            </div>
        </div>
    );
};

export default TripDetails;