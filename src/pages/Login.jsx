import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://mexp2-backend.vercel.app/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token);
                navigate('/grade-portal');
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error('Error during login:', error.message);
            alert("An error occurred during login. Please try again.");
        }
    };

    return (
        <section className="w-full flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-[#121212] to-blue-800">
            <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-96 transition-all duration-300 hover:shadow-3xl animate-fade-in">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Log-in</h2>
                <form onSubmit={handleLogin} className="space-y-4">
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
                        Login
                    </button>
                </form>
                <button 
                    onClick={() => navigate('/signup')} 
                    className="w-full mt-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300"
                >
                    Go to Signup
                </button>
            </div>
        </section>
    );
};

export default Login;