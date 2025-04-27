import { DiApple } from "react-icons/di";
import {FaGoogle,FaFacebook} from "react-icons/fa";
import "../assets/SignUp.css";
function SignUp(){
    return (
        <>
      
    <div className="signupbgimg">
       <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fstreet-in-bhaktapur&psig=AOvVaw2LCPJrGIgWq8HNFziWcr4W&ust=1745829816506000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiu6pfp94wDFQAAAAAdAAAAABAJ" alt="image"/>
    </div>

      <div className="signup-container">

       <form className="SignUpForm" action="">

       <h1 id="SignUphH1">Create an Account</h1>
        
        <p id="SignUpP">Create an account to get started</p>
        

        <div className="form-group">

       
        <div className="input">
        <label for="email"></label>
        <input type="email" id="email" name="email" required placeholder="Your email address"></input>
       </div>

       <div className="input">
        <label for="password"></label>
        <input type ="password" id="password1" name="password" required placeholder ="Create a password"/>
        </div>


        <div className="input">
        <label for="oldpassword"></label>
        <input type ="password" id="password2" name="password" required placeholder ="verify password"/>
        </div>

        <div className="checkbox">
          <input type="checkbox" id="TermsandConditions" name="Terms and Conditions"/> 
           <label for="Terms and Conditions">I agree with terms and conditions</label>
           </div>

          <button type="submit" className="btn">Sign Up</button>

          </div>

           <div class="divider">
            <span id="signUpOr">Or</span>
           </div>


           <div className="signUpBtn">
           <button type="button" className="apple-btn"> <span id="signUpLogo"><DiApple /></span>Continue with Apple</button>
           <button type="button" className ="google-btn"> <span id="signUpLogo"><FaGoogle /></span>Continue with Google</button>
           <button type="button" className ="facebook-btn">
             <span id="signUpLogo"><FaFacebook /></span>Continue with Facebook</button>
         </div>


       </form>
     
      </div>
          

        </>
    )
}

      export default SignUp; 
