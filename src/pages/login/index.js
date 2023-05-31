const LoginPage = () => {
    const onLoginClick=(e)=>{
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify({name:"test",email:"test@testing.com"}));
        window.location = "/";
    }
    return (
        <div className="login-container">
            <form>
                <h3>Sign in to your account</h3>

                <label for="email">Email</label>
                <input type="text" placeholder="Enter your Email" id="email" />

                <label for="password">Password</label>
                <input type="password" placeholder="Enter your Password" id="password" />

                <button onClick={onLoginClick}>Log In</button>
                <div className='account-span'>
                    <span>
                        Don't have an account?
                        <a class="link" href="#">
                            Sign Up
                        </a>
                    </span>
                </div>
            </form>
        </div>
    )
};

export default LoginPage;