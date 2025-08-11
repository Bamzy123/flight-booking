import React from 'react';
import sun from '../../assets/Sun.png'
import beach from '../../assets/sand.png'
import palmTree from '../../assets/stick.png'
import clouds from '../../assets/cloud.png'
import tree from '../../assets/tree.png'

const BeachScene: React.FC = () => {
    return (
        <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 bg-[#CFE9FF] rounded-lg overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
                <button className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            {/* Clouds */}
            <img src={clouds} alt="Clouds" className="absolute top-8 left-16" />

            {/* Sun */}
            <img src={sun} alt="Sun" className="absolute top-6 right-6 w-16 h-16" />

            {/* Beach/Land */}
            <img src={beach} alt="Beach" className="absolute bottom-0 left-0 w-1/1 h-8" />
            <div className="absolute bottom-8 left-1/5 w-16 h-32">
                {/* Tree Crown */}
                <img src={tree} alt="Tree Crown" className="absolute bottom-12 left-0 w-16 z-10" />
                {/* Palm Tree Trunk */}
                <img src={palmTree} alt="Palm Tree Trunk" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-16" />
            </div>
        </div>
    );
};

export default BeachScene;