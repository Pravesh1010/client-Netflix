import "./login.scss";


export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm"
            alt=""
            className="logo"
          />
        </div> 
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginBUtton">Sign In</button>
          <span>
            New to Netflix? <b>Sign Up Now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
}
