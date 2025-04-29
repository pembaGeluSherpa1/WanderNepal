import "../assets/Login.css";
import { CiLock, CiMail } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("../data/user.json");
            const userData = await response.json();
            
            if (username === userData.username && password === userData.password) {
                console.log("Login successful");
                setError("");
                navigate("/");
            } else {
                setError("Invalid username or password");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <>
            <img 
                src="https://img.freepik.com/free-photo/vertical-shot-lochawa-la-khang-monastery-kalpa-himachal-pradesh-cold-winter_181624-23562.jpg?semt=ais_hybrid&w=740" 
                alt="Background" 
                id="Background-img" 
            />
            <div className="Login-container">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p>Your gateway to Wander Nepal Pass</p>

                    <div className="user">
                        <label>
                            <input 
                                type="text" 
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <CiMail />
                    </div>

                    <div className="psw">
                        <label>
                            <input 
                                type="password" 
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <CiLock />
                    </div>

                    <button type="submit">Login</button>

                    {error && <div className="error">{error}</div>}

                    <div className="remember-forget">
                        <p>Don't remember password? <a href="#">Forgot Password</a></p>
                    </div>

                    <div className="signn">
                        <p>Need to create an account? <a href="#">Sign-up</a></p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;