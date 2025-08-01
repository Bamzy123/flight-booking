import React from 'react';
import { AmericanAirlinesLogo } from '../icons';
import { BaggageClaim, Clapperboard, Utensils, Usb, PlaneTakeoff, PlaneLanding, X } from 'lucide-react';

const FlightCard: React.FC = () => {
    return (
        <div className="max-w-6xl w-full bg-white shadow-lg flex overflow-hidden">
            <div className="flex-grow p-6 space-y-4">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

                    <div className="flex items-center gap-3">
                        <AmericanAirlinesLogo className="h-10 w-10" />
                        <div>
                            <p className="font-bold text-lg text-gray-800">American Airlines</p>
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <span>AA-829</span>
                                <span className="bg-blue-800 text-white text-xs font-semibold px-2 py-0.5 rounded-md">First Class</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-grow w-full lg:w-auto items-center justify-between lg:justify-center gap-2 sm:gap-4">

                        <div className="text-center">
                            <p className="font-bold text-xl text-gray-900">08:35</p>
                            <p className="text-sm text-gray-500">Sun, 20 Aug</p>
                            <p className="font-semibold text-gray-800">LOS</p>
                        </div>

                        <div className="flex-grow max-w-xs text-center">
                            <div className="flex items-center justify-between text-gray-400">
                                <PlaneTakeoff className="w-5 h-5" />
                                <p className="text-xs text-gray-500 font-medium">Duration: 1h 45m</p>
                                <PlaneLanding className="w-5 h-5" />
                            </div>
                            <div className="relative w-full h-1 bg-gray-200 rounded-full my-1">
                                <div className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full" style={{width: '100%'}}></div>
                            </div>
                            <p className="text-sm text-gray-600 font-semibold">Direct</p>
                        </div>

                        {/* Arrival */}
                        <div className="text-center">
                            <p className="font-bold text-xl text-gray-900">09:55</p>
                            <p className="text-sm text-gray-500">Sun, 20 Aug</p>
                            <p className="font-semibold text-gray-800">SIN</p>
                        </div>
                    </div>

                    <div className="lg:pl-6 lg:border-l lg:border-gray-200 self-center">
                        <p className="font-bold text-2xl text-gray-900 whitespace-nowrap">₦ 123,450.00</p>
                    </div>
                </div>

                <div className="border-t border-gray-200"></div>

                <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-gray-600 text-sm">
                    <p className="font-semibold text-gray-700">Facilities:</p>
                    <div className="flex items-center gap-2">
                        <BaggageClaim className="w-5 h-5 text-gray-500" />
                        <span>Baggage: 20kg, Cabin Baggage: 8kg</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clapperboard className="w-5 h-5 text-gray-500" />
                        <span>In flight entertainment</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-gray-500" />
                        <span>In flight meal</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Usb className="w-5 h-5 text-gray-500" />
                        <span>USB Port</span>
                    </div>
                </div>

                <div className="border-t border-gray-200"></div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-blue-600 font-semibold hover:underline text-sm">Flight details</a>
                        <a href="#" className="text-blue-600 font-semibold hover:underline text-sm">Price details</a>
                    </div>
                    <a href="#" className="text-blue-600 font-semibold hover:underline text-sm">Edit details</a>
                </div>
            </div>

            <div className="bg-red-50 flex items-start justify-center p-2 border-l border-red-200">
                <button className="text-red-500 hover:text-red-700">
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default FlightCard;