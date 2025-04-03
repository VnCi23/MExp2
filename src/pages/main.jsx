import React from 'react';

const Main = () => {
    return (
        <div>
            {/* Middle Section */}
            <section className="w-full flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-[#121212] to-blue-800">
                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <h1
                        className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                        style={{ lineHeight: 1.2 }}
                    >
                        <span className="relative whitespace-nowrap text-blue-400">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 418 42"
                                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-400/70"
                                preserveAspectRatio="none"
                            >
                                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
                            </svg>
                            <span className="relative">IS Professional Elective 3 </span>
                        </span>{" "}
                        - MExp2
                    </h1>

                    <h2 className="m-auto mb-8 max-w-2xl text-2xl">
                        This website calculates student grades for Midterm and Final periods using quizzes (40%), class
                        standing (10%), and exams (50%). It computes the Total Grade (TGRADE) from 40% Midterm and 60%
                        Final grades, converts it to an equivalent score, and assigns a remark like Outstanding or
                        Passed.
                    </h2>

                    {/* Buttons */}
                    <div className="flex justify-center items-center m-8 space-x-4">
                        <a
                            href="/login"
                            rel="noopener noreferrer"
                            className="relative flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
                        >
                            <span className="relative z-10 pr-2">Login</span>
                        </a>
                        <a
                            href="/team"
                            rel="noopener noreferrer"
                            className="relative flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
                        >
                            <span className="relative z-10 pr-2">Creators</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;