

import React from 'react';

const Loading = () => {
    return (
        <div className="flex min-h-[300px] items-center justify-center">
            <div className="relative flex h-20 w-20 items-center justify-center">

                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-pink-500 border-r-purple-500 animate-spin"></div>

                {/* Inner rotating ring */}
                <div className="absolute h-12 w-12 rounded-full border-4 border-transparent border-b-orange-400 border-l-pink-500 animate-[spin_1.5s_linear_infinite_reverse]"></div>

                {/* Center dot */}
                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 shadow-[0_0_20px_rgba(236,72,153,0.8)]"></div>

            </div>
        </div>
    );
};

export default Loading;