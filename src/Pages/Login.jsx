import "../assets/Login.css"
import { CiLock , CiMail} from "react-icons/ci";

function Login(){
    return(
        <>
        <img src="https://img.freepik.com/free-photo/vertical-shot-lochawa-la-khang-monastery-kalpa-himachal-pradesh-cold-winter_181624-23562.jpg?semt=ais_hybrid&w=740" alt="Background" id="Background-img"/>
        <div className="Login-container">
            <form action="">
                <h1>Login</h1>
                <p>Your gateway to Wander Nepal Pass</p>

                <div className="user">
                <label><input type="Username" placeholder="Username" /></label>
                <CiMail />
                </div>

                <div className="psw">
                <label><input type="Password" placeholder="Password"/></label>
                <CiLock />
                </div>

                <button type="Submit">Login</button>

                <div className="remember-forget">
                    <p>Don't remember password?<a href="#">Forgot Password</a></p>
                </div>

            
            <div className="signn">
                <p>Need to create an account?<a href="#">Sign-up</a></p>
            </div>

            </form>
        </div>
        </>
    )
}
export default Login;