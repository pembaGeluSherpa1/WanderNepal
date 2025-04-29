import { DiApple } from "react-icons/di";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import "../assets/SignUp.css";

function SignUp() {
  return (
    <div className="auth-page">

    
      <div className="left-side">
        <img
          src="https://cdn.pixabay.com/photo/2019/12/13/08/21/gokyo-ri-4692458_1280.jpg"
          alt="Background"
          className="background-img"
        />
        <div className="overlay-content">
          <h2>Welcome!</h2>
          <p>Join us and explore the beauty of Nepal.</p>
        </div>
      </div>

    
      <div className="right-side">
        <form>
          <h1>Create an Account</h1>
          <p>Create an account to get started</p>

          <div className="input-single">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email address"
            />
          </div>

          <div className="input-single">
            <input
              type="password"
              id="password1"
              name="password"
              required
              placeholder="Create a password"
            />
          </div>

          <div className="input-single">
            <input
              type="password"
              id="password2"
              name="password"
              required
              placeholder="Verify password"
            />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms"> I agree with terms and conditions</label>
          </div>

          <button type="submit">Sign Up</button>

          <div className="divider">Or</div>

          <div className="social-buttons">
            <button type="button" className="google-btn">
              <FaGoogle style={{ marginRight: "8px" }} />
              Google
            </button>
            <button type="button" className="apple-btn">
              <DiApple style={{ marginRight: "8px" }} />
              Apple
            </button>
            <button type="button" className="google-btn">
              <FaFacebook style={{ marginRight: "8px" }} />
              Facebook
            </button>
          </div>

          <p>
            Already registered? <a href="#">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;