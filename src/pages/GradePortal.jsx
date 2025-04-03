import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ComputedGrade = () => {
    const [grades, setGrades] = useState({
        MQ1: 0, MQ2: 0, MQ3: 0, MQ4: 0, MCS: 0, MEXAM: 0,
        FQ1: 0, FQ2: 0, FQ3: 0, FQ4: 0, FCS: 0, FEXAM: 0,
    });

    const [results, setResults] = useState({
        MGRADE: 0, FGRADE: 0, TGRADE: 0, EQUIVALENT: '', REMARK: ''
    });

    const [loading, setLoading] = useState(false); // Loading state
    const [showModal, setShowModal] = useState(false); // Modal state
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGrades({ ...grades, [name]: parseFloat(value) || 0 });
    };

    const computeGrades = () => {
        setLoading(true); // Show spinner
        setTimeout(() => {
            // Midterm Grade
            const midtermQuizzes = (grades.MQ1 + grades.MQ2 + grades.MQ3 + grades.MQ4) / 4 * 0.4;
            const midtermClassStanding = grades.MCS * 0.1;
            const midtermExam = grades.MEXAM * 0.5;
            const MGRADE = midtermQuizzes + midtermClassStanding + midtermExam;

            // Final Grade
            const finalQuizzes = (grades.FQ1 + grades.FQ2 + grades.FQ3 + grades.FQ4) / 4 * 0.4;
            const finalClassStanding = grades.FCS * 0.1;
            const finalExam = grades.FEXAM * 0.5;
            const FGRADE = finalQuizzes + finalClassStanding + finalExam;

            // Total Grade
            const TGRADE = MGRADE * 0.4 + FGRADE * 0.6;

            // Equivalent and Remark
            let EQUIVALENT = '';
            let REMARK = '';
            if (TGRADE >= 98) { EQUIVALENT = '1.00'; REMARK = 'Outstanding'; }
            else if (TGRADE >= 95) { EQUIVALENT = '1.25'; REMARK = 'Excellent'; }
            else if (TGRADE >= 92) { EQUIVALENT = '1.50'; REMARK = 'Very Satisfactory'; }
            else if (TGRADE >= 89) { EQUIVALENT = '1.75'; REMARK = 'Very Satisfactory'; }
            else if (TGRADE >= 86) { EQUIVALENT = '2.00'; REMARK = 'Satisfactory'; }
            else if (TGRADE >= 83) { EQUIVALENT = '2.25'; REMARK = 'Satisfactory'; }
            else if (TGRADE >= 80) { EQUIVALENT = '2.50'; REMARK = 'Fair'; }
            else if (TGRADE >= 77) { EQUIVALENT = '2.75'; REMARK = 'Fair'; }
            else if (TGRADE >= 75) { EQUIVALENT = '3.00'; REMARK = 'Passed'; }
            else { EQUIVALENT = '5.00'; REMARK = 'Failed'; }

            setResults({ MGRADE, FGRADE, TGRADE, EQUIVALENT, REMARK });
            setLoading(false); // Hide spinner
            setShowModal(true); // Show modal
        }, 3000); // Simulate computation delay (3 seconds)
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#121212] to-blue-800">
            <style>
                {`
                /* From Uiverse.io by kennyotsu-monochromia */
                    .Btn {
                    --black: #000000;
                    --ch-black: #141414;
                    --eer-black: #1b1b1b;
                    --night-rider: #2e2e2e;
                    --white: #ffffff;
                    --af-white: #f3f3f3;
                    --ch-white: #e1e1e1;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    width: 45px;
                    height: 45px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition-duration: 0.3s;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
                    background-color: rgb(231,77,77);
                    }

                    .sign {
                    width: 100%;
                    transition-duration: 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    }

                    .sign svg {
                    width: 17px;
                    }

                    .sign svg path {
                    fill: var(--af-white);
                    }

                    .text {
                    position: absolute;
                    right: 0%;
                    width: 0%;
                    opacity: 0;
                    color: var(--af-white);
                    font-size: 1.2em;
                    font-weight: 600;
                    transition-duration: 0.3s;
                    }

                    .Btn:hover {
                    width: 125px;
                    border-radius: 5px;
                    transition-duration: 0.3s;
                    }

                    .Btn:hover .sign {
                    width: 30%;
                    transition-duration: 0.3s;
                    padding-left: 20px;
                    }

                    .Btn:hover .text {
                    opacity: 1;
                    width: 70%;
                    transition-duration: 0.3s;
                    padding-right: 10px;
                    }

                    .Btn:active {
                    transform: translate(2px, 2px);
                    }
      /* Spinner styles */

                .spinner-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    opacity: 0;
                    animation: fadeIn 1s forwards; /* Smoother fade-in */
                }

                .spinner {
                    position: relative;
                    width: 60px;
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                }

                .spinner span {
                    position: absolute;
                    top: 50%;
                    left: var(--left);
                    width: 35px;
                    height: 7px;
                    background: #fff;
                    animation: dominos 2s ease infinite; /* Slower animation */
                    box-shadow: 2px 2px 3px 0px black;
                }

                .spinner span:nth-child(1) {
                    --left: 80px;
                    animation-delay: 0.25s;
                }

                .spinner span:nth-child(2) {
                    --left: 70px;
                    animation-delay: 0.5s;
                }

                .spinner span:nth-child(3) {
                    left: 60px;
                    animation-delay: 0.75s;
                }

                .spinner span:nth-child(4) {
                    animation-delay: 1s;
                    left: 50px;
                }

                .spinner span:nth-child(5) {
                    animation-delay: 1.25s;
                    left: 40px;
                }

                .spinner span:nth-child(6) {
                    animation-delay: 1.5s;
                    left: 30px;
                }

                .spinner span:nth-child(7) {
                    animation-delay: 1.75s;
                    left: 20px;
                }

                .spinner span:nth-child(8) {
                    left: 10px;
                }

                @keyframes dominos {
                    50% {
                        opacity: 0.7;
                    }

                    75% {
                        transform: rotate(90deg);
                    }

                    80% {
                        opacity: 1;
                    }
                }

                @keyframes fadeIn {
                    to {
                        opacity: 1;
                    }
                }

                .modal {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0.9);
                    background: #1e293b;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    z-index: 1000;
                    color: white;
                    opacity: 0;
                    animation: fadeInModal 1s forwards; /* Smoother fade-in for modal */
                }

                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 999;
                    opacity: 0;
                    animation: fadeIn 1s forwards;
                }

                @keyframes fadeInModal {
                    to {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
                `}
            </style>
            {loading && (
                <div className="spinner-overlay">
                    <div className="spinner">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            )}
            {!loading && (
                <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-2xl transition-all duration-300 hover:shadow-3xl animate-fade-in">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-white">Compute Your Grade</h2>
                        <button className="Btn" onClick={handleLogout}>
                        <div className="sign">
                            <svg viewBox="0 0 512 512">
                            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                            </svg>
                        </div>
                        <div className="text">Logout</div>
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.keys(grades).map((key) => (
                            <div key={key} className="flex flex-col">
                                <label className="font-medium text-white">{key}</label>
                                <input
                                    type="number"
                                    name={key}
                                    value={grades[key]}
                                    onChange={handleChange}
                                    className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={computeGrades}
                        className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Compute
                    </button>
                </div>
            )}

            {showModal && (
                <>
                    <div className="modal-overlay" onClick={() => setShowModal(false)}></div>
                    <div className="modal">
                        <h3 className="text-lg font-bold">Results:</h3>
                        <p>Midterm Grade: {results.MGRADE.toFixed(2)}</p>
                        <p>Final Grade: {results.FGRADE.toFixed(2)}</p>
                        <p>Total Grade: {results.TGRADE.toFixed(2)}</p>
                        <p>Equivalent: {results.EQUIVALENT}</p>
                        <p>Remark: {results.REMARK}</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Close
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ComputedGrade;