import "../assets/Login.css"
import { CiLock , CiMail} from "react-icons/ci";

function Login(){
    return(
        <>
        <div className="Login">
            <div className="left-side">
                 <img src="https://img.freepik.com/free-photo/vertical-shot-lochawa-la-khang-monastery-kalpa-himachal-pradesh-cold-winter_181624-23562.jpg?semt=ais_hybrid&w=740" alt="Background" id="Background-img"/>
                <div className="left-contents">
                    <h2>Wander Freely,</h2>
                    <h2>Experience Deeply.</h2>
                </div>
            </div>
        
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
</div>

        {/* <div className="auth-page">
  <div className="left-side">
    <div className="overlay-content">
      <h2>Capturing Moments,</h2>
      <h2>Creating Memories</h2>
    </div>
  </div>

  <div className="right-side">
    <form action="">
      <h1>Login</h1>
      <p>New here? <a href="#">Create an account</a></p>

      <div className="input-single">
        <input type="text" placeholder="Username" />
      </div>

      <div className="input-single">
        <input type="password" placeholder="Password" />
      </div>

      <div className="checkbox-group">
        <label><input type="checkbox" /> Remember Me</label>
      </div>

      <button type="submit">Login</button>

      <div className="divider">or continue with</div>

      <div className="social-buttons">
        <button className="google-btn">Google</button>
        <button className="apple-btn">Apple</button>
      </div>
    </form>
  </div>
</div> */}



        </>
    )
}
export default Login;