import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import Logo from "../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem('isAuth')) || false);

  function handleLogin() {
    signInWithPopup(auth, provider).then((res) => {
      console.log(res);
      console.log(res.user.displayName);
      setAuth(true);
      localStorage.setItem("isAuth", true);
    });
  }
  function handleLogout() {
    signOut(auth);
    setAuth(false);
    localStorage.setItem("isAuth", false);
  }
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="writeNode Logo" />
        <span>WriteNode</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button onClick={handleLogout} className="auth">
              <i className="bi bi-box-arrow-right"></i>
              Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogin} className="auth">
            <i className="bi bi-google"></i>
            Login
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
