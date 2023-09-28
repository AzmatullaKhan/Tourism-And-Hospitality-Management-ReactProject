// import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { getData, handleLogout, isLoggedIn } from "./Login"
import './zcss.css'
export const Home = () =>{
    function navFunction() {
        var x = document.getElementById("navbarr");
        var y = document.getElementById("nav");
        if (x.className === "navbar") {
          x.className += " responsive";
          y.textContent="Close"
        } else {
          x.className = "navbar";
          y.textContent="Click"
        }
      }
    const navigate = useNavigate();
    const handleLogin = () =>{
        navigate('/login');
    }
    const handleSignIn = () =>{
        navigate('/signUp');
    }
    const d= getData();
    const handleData = ()=>{
        alert(d);
    }
    const handleBook = () =>{
        navigate('/book')
    }
    const handleAbout=()=>{
        navigate('/about')
    }
    return(
        <div>
            <div className="home-main">
                <div className="navbar" id="navbarr">
                    <button className="home-button">LOGO</button>
                        <div>
                            
                            <button className="home-button glow" onClick={handleBook}>Book</button>
                            <button className="home-button glow">help</button>
                            {
                                isLoggedIn?
                                (<button className="home-button glow" onClick={handleLogout}>LogOut</button>):
                                (<button className="home-button glow" onClick={handleLogin}>Login</button>)
                            }
                            {
                                isLoggedIn? 
                                (<button className="home-button glow" onClick={handleData}>Profile</button>):
                                (<button className="home-button glow" onClick={handleSignIn}>SignIn</button>)
                            }
                            <button className="home-button glow" onClick={handleAbout}>about</button>
                            <button className="home-button glow icon" id="nav" onClick={navFunction}>click</button>
                        </div>
                </div>
            </div>
        </div>
       
    )
}