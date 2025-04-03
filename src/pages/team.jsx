import React from 'react';

const Team = () => {
    return (
        <div className="w-full flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-[#121212] to-blue-800">
            <div className="bg-gray-800 rounded-xl shadow-2xl max-w-md w-full overflow-hidden transition-all duration-300 hover:shadow-3xl animate-fade-in">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">Creators</h2>
                    <div className="space-y-4">
                        {/* Team Member 1 */}
                        <div className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-600">
                            <img
                                src="https://lh3.googleusercontent.com/a-/ALV-UjUgzim7dWoUj7LR-xnaptVvxMVl5amg2LiZGF6vuY-4fOcDYfwf=s89-p-k-rw-no"
                                className="w-12 h-12 rounded-full border-2 border-blue-900"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-white">Vince Christian Gaurino</h3>
                            </div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-600">
                            <img
                                src="https://lh3.googleusercontent.com/a-/ALV-UjWJ72xTbbkiYbUOoz92UAlqWNQ11yvb3ptGa44RzX_ZdNkhj07w=s89-p-k-rw-no"
                                className="w-12 h-12 rounded-full border-2 border-blue-900"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-white">Jan Anferney Ibe</h3>
                            </div>
                        </div>
                        {/* Team Member 3 */}
                        <div className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-600">
                            <img
                                src="https://lh3.googleusercontent.com/a-/ALV-UjUHfT_YUGdvFYcrLk6ciGbgGaHagN_CvBnDNG5MQz9jl6yuTnw=s89-p-k-rw-no"
                                className="w-12 h-12 rounded-full border-2 border-blue-900"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-white">Johnsin Almonguera</h3>
                            </div>
                        </div>
                        {/* Team Member 4 */}
                        <div className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-600">
                            <img
                                src="https://lh3.googleusercontent.com/a-/ALV-UjVX3_x3p2szFwn-3u5pzm4AJV_lI9WY7qXr4FSaL0QqJQGDSwk=s89-p-k-rw-no"
                                className="w-12 h-12 rounded-full border-2 border-blue-900"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-white">Albert Anthony Napal</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;