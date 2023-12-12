import { useState } from "react";
import { Link } from "react-router-dom";

const Title=()=> (
    <a href="/">
     <img className="logo" src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0" alt="Food Villa" />
     </a>
 );

 const Header = () => {
    // use useState for user logged in or logged out
    const [isLoggedin, setIsLoggedin] = useState(true);
  
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
            <li>
              {/* use conditional rendering for login and logout */}
              {isLoggedin ? (
                <button
                  className="logout-btn"
                  onClick={() => setIsLoggedin(false)}
                >
                  Logout
                </button>
              ) : (
                <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  };
  

 export default Header;