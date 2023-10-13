// import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { getData, handleLogout, isLoggedIn } from "./Login"
import './zcss.css'
import { useRef } from "react"
import trialElements, { carouselElements } from "./Data"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export let desc1;
export const Home = () =>{
    const clickHandler=(element)=>{
        const {id,  pic, desc, nameHotel, placeHotel, stateHotel, totalAvailableRoomsHotel, costPerNightHotel, ratingHotel, url}=(element);
         desc1={id,  pic, desc, nameHotel, placeHotel, stateHotel, totalAvailableRoomsHotel, costPerNightHotel, ratingHotel, url}
        navigate('/bookPage')
    }
     const carouselRef= useRef(null);
    const scrollAmount = 248;
 
    const StateHolder=(elements, name)=>{
        let nameRef="slider"+name+"Ref";
        nameRef=useRef(null);
        return(
                <div className="state-main">
                    <h1 style={{textAlign:"left", padding:"0px 0px 0px 120px"}}>{name}</h1>
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
                                <li key={element.id}>
                                <div className="show-desc" onClick={() => clickHandler(element)}>
                                    <img src={element.pic} alt={element.id} className="image"/>
                                    <div className="hidden-desc">
                                        <h1 style={{backgroundColor:"black"}}>{element.desc}</h1>
                                    </div>
                                </div>
                                </li>
                                
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
    const handleAbout=()=>{
        navigate('/about')
    }
    // const handleBookPage=()=>{
    //     navigate('./bookPage')
    // }
    const handleHelp=()=>{
        navigate('/help')
    }
    return(
        <div>
            <div className="home-main">
                <div className="navbar" id="navbarr">
                    <button className="home-button">LOGO</button>
                    <div>
                        <input type="text" placeholder="Search here" className="home-search"></input>
                    </div>
                    <div>
                        {/* <button className="home-button glow" onClick={handleBookPage}>Book</button> */}
                        {
                            isLoggedIn?
                            (<button className="home-button" onClick={handleLogout}>LogOut</button>):
                            (<button className="home-button" onClick={handleLogin}>Login</button>)
                        }
                        {
                            isLoggedIn? 
                            (<button className="home-button " onClick={handleData}>Profile</button>):
                            (<button className="home-button " onClick={handleSignIn}>SignIn</button>)
                        }
                        <button className="home-button " onClick={handleAbout}>about</button>
                        <button className="home-button " onClick={handleHelp}>help</button>
                        <button className="home-button  icon" id="nav" onClick={navFunction}>click</button>
                    </div>
                </div>
                <div className="carousel-main">
                    <div className="carousel-mini-main">
                        <button className="nav-btn"
                            onClick={() => {
                            const container = carouselRef.current;
                            container.scrollLeft -= scrollAmount; 
                            }}
                            >
                            <ChevronLeftIcon />
                        </button>
                        <div className="carousel-mini" ref={carouselRef}>
                                {carouselElements.map((element) => (
                                <li key={element.id}>
                                    <div style={{backgroundImage:`url(${element.pic})`}} className="carousel-image">
                                        <h1 style={{backgroundColor:"#000", width:"24px", height:"28px"}}>#{element.id}</h1>
                                        <div className="carosel-image-desc">
                                            <h1>about</h1>
                                        </div>
                                    </div>
                                </li>
                                ))}
                        </div>
                        <button className="nav-btn"
                            onClick={() => {
                            const container = carouselRef.current;
                            container.scrollLeft += scrollAmount; 
                            }}
                            >
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
                <center>   
                    {StateHolder(trialElements, "Andhra Pradesh")}
                </center>
            </div>
        </div>
       
    )
}