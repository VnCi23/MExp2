import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.message === "User registered successfully") {
            navigate('/login');
        } else {
            alert("Error during registration");
        }
    };

    return (
        <section className="w-full flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-[#121212] to-blue-800">
            <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-96 transition-all duration-300 hover:shadow-3xl animate-fade-in">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Sign-up</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Signup
                    </button>
                </form>
                <button 
                    onClick={() => navigate('/login')} 
                    className="w-full mt-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300"
                >
                    Go to Login
                </button>
            </div>
        </section>
    );
};

export default Signup;