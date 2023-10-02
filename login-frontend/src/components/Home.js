// import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { getData, handleLogout, isLoggedIn } from "./Login"
import trialElements from "./Data"
import './zcss.css'
import { useRef } from "react"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export const Home = () =>{
    const sliderTrail1Ref = useRef(null);
    const sliderTrail2Ref = useRef(null);
    const scrollAmount = 256;
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
                <div className="state-main">
                    <center><h1>Trial1</h1></center>
                    <div className="state-holder-main">
                        <button className="nav-btn"
                            onClick={() => {
                            const container = sliderTrail1Ref.current;
                            container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
                            }}
                            >
                            <ChevronLeftIcon />
                        </button>
                        <div className="state-holder-mini" ref={sliderTrail1Ref}>
                            {trialElements.map((element) => (
                            <img src={element.pic} alt={element.id} className="image"/>
                            ))}
                        </div>
                        
                        <button className="nav-btn"
                            onClick={() => {
                            const container = sliderTrail1Ref.current;
                            container.scrollLeft += scrollAmount; // Scroll left by the specified amount
                            }}
                            >
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
                <div className="state-main">
                    <center><h1>Trial2</h1></center>
                    <div className="state-holder-main">
                        <button className="nav-btn"
                            onClick={() => {
                            const container = sliderTrail2Ref.current;
                            container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
                            }}
                            >
                            <ChevronLeftIcon />
                        </button>
                        <div className="state-holder-mini" ref={sliderTrail2Ref}>
                            {trialElements.map((element) => (
                            <img src={element.pic} alt={element.id} className="image"/>
                            ))}
                        </div>
                        
                        <button className="nav-btn"
                            onClick={() => {
                            const container = sliderTrail2Ref.current;
                            container.scrollLeft += scrollAmount; // Scroll left by the specified amount
                            }}
                            >
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
       
    )
}