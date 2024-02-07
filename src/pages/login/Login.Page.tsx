const LoginPage = () => {
    return (
        <>
            <div>Sign in</div>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Log in</button>
            <label htmlFor="remember-me">Remember me</label>
            <input type="checkbox" id="remember-me" />
            <a href="#">Forgot Password</a>
        </>
    );
};

export default LoginPage;
