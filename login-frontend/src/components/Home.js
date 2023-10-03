// import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { getData, handleLogout, isLoggedIn } from "./Login"
import './zcss.css'
import { useRef } from "react"
import trialElements from "./Data"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export const Home = () =>{
    // const sliderTrail1Ref = useRef(null);
    // const sliderTrail2Ref = useRef(null);
    const scrollAmount = 248;
 
    const StateHolder=(elements, name)=>{
        let nameRef="slider"+name+"Ref";
        nameRef=useRef(null);
        return(
                <div className="state-main">
                    <center><h1>{name}</h1></center>
                    <div className="state-mini-main">
                        <button className="nav-btn"
                            onClick={() => {
                            const container = nameRef.current;
                            container.scrollLeft -= scrollAmount; 
                            }}
                            >
                            <ChevronLeftIcon />
                        </button>
                        <div className="state-mini" ref={nameRef}>
                                {elements.map((element) => (
                                <img src={element.pic} alt={element.id} className="image"/>
                                ))}
                        </div>
                        <button className="nav-btn"
                            onClick={() => {
                            const container = nameRef.current;
                            container.scrollLeft += scrollAmount; 
                            }}
                            >
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
        )
    }

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
                <center>
                    {StateHolder(trialElements, "Trail1")}
                    {StateHolder(trialElements, "Trail2")}
                    {StateHolder(trialElements, "Trail3")}
                </center>
            </div>
        </div>
       
    )
}