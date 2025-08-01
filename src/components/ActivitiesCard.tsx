import React from 'react';
import art from '../assets/art.png'
import { ChevronLeft, ChevronRight, MapPin, Star, X, Clock } from 'lucide-react';

const ActivitiesCard: React.FC = () => {
    return (
        <div className="flex flex-col sm:flex-row bg-white shadow-lg max-w-5xl mx-auto overflow-hidden font-sans">
            <div className="flex flex-col sm:flex-row flex-grow">
                <div className="relative w-full sm:w-[320px] h-[200px] sm:h-auto flex-shrink-0">
                    <img
                        src={art}
                        alt="Museum of Modern Art"
                        className="w-full h-full object-cover"
                    />
                    <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-colors">
                        <ChevronLeft className="h-5 w-5 text-gray-700" />
                    </button>
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-colors">
                        <ChevronRight className="h-5 w-5 text-gray-700" />
                    </button>
                </div>

                <div className="flex-grow p-4 sm:p-6 flex flex-col space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div>
                            <h1 className="text-lg sm:text-xl font-bold text-gray-800">The Museum of Modern Art</h1>
                            <p className="text-sm text-gray-500 mt-1 max-w-xs">
                                Works from van Gogh to Warhol & beyond plus a sculpture garden, 2 cafe
                                and the modern restaurant.
                            </p>
                        </div>
                        <div className="text-left sm:text-right w-full sm:w-auto">
                            <p className="text-xl sm:text-2xl font-bold text-gray-800">₦ 123,450.00</p>
                            <p className="text-xs text-gray-500">10:30M on Mar 19</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 sm:gap-5 text-sm text-gray-600">
                        <a href="#" className="flex items-center space-x-1.5 hover:text-blue-600">
                            <MapPin className="h-4 w-4 text-blue-500" />
                            <span>Direction</span>
                        </a>
                        <div className="flex items-center space-x-1">
                            <Star className="h-5 w-5 text-yellow-500 fill-current" />
                            <span className="font-medium">4.5</span>
                            <span className="text-gray-500">(436)</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                            <Clock className="h-5 w-5 text-gray-500" />
                            <span>1 Hour</span>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-sm text-gray-600">
                        <span className="font-medium text-gray-700">What's included:</span>
                        <div className="flex flex-wrap items-center justify-between w-full">
                            <div className="flex items-center space-x-2">
                                <span>Admission to the empire state building</span>
                                <span><a href="#" className="text-blue-500">See more</a></span>
                            </div>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2 sm:mt-0">Day 1</button>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm">
                        <div className="flex space-x-4">
                            <a href="#" className="font-medium text-blue-600 hover:underline">Hotel details</a>
                            <a href="#" className="font-medium text-blue-600 hover:underline">Price details</a>
                        </div>
                        <a href="#" className="font-medium text-blue-600 hover:underline">Edit details</a>
                    </div>
                </div>
            </div>

            <div className="bg-red-50 flex items-start p-2 border-l border-red-100">
                <button className="text-red-500 hover:text-red-700">
                    <X className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

export default ActivitiesCard;