import "../assets/Login.css"
function Login(){
    return(
        <>
        <div className="container">
            <form action="">
                <h1>Login</h1>
                <div className="user">
                <label><input type="Username" placeholder="Username" /></label>
                </div>

                <div className="psw">
                <label><input type="Password" placeholder="Password"/></label>
                </div>

                <button type="Submit">Login</button>

                <div className="remember-forget">
                    <p>Don't remember password?<a href="#">Forgot Password</a></p>
                </div>

            </form>
        </div>
        </>
    )
}
export default Login;