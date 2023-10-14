// import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { getData, handleLogout, isLoggedIn } from "./Login"
import './zcss.css'
import { useRef } from "react"
import AndhraPradesh, { carouselElements } from "./Data"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export let innerHotelsPics;
export const Home = () =>{
    const clickHandler=(element)=>{
        const {innerHotels}=element;
        innerHotelsPics={innerHotels}
        navigate('/hotels')
    }
     const carouselRef= useRef(null);
    const scrollAmount = 248;
 
    const StateHolder=(elements, name)=>{
        let nameRef="slider"+name+"Ref";
        nameRef=useRef(null);
        return(
                <div className="state-main">
                    <h2 style={{textAlign:"left", padding:"0px 0px 0px 120px"}}>{name}</h2>
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
                                    <div style={{backgroundImage:`url(${element.pic})`, backgroundSize:"cover"}} className="image">
                                        <h1>{element.placeName}</h1>
                                    </div>
                                    {/* <img src={element.pic} alt={element.id} className="image"/> */}
                                    {/* <div className="hidden-desc">
                                        <h1 style={{backgroundColor:"black"}}>{element.desc}</h1>
                                    </div> */}
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
    const handleHomeClick=()=>{
        window.location.reload()
    }
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
    const search=(e)=>{
        const search=e.target.value.toUpperCase();
        const items=document.getElementById('states-list')
        const product=document.querySelectorAll(".state-main")
        const pname=items.getElementsByTagName("h2");
        for(var i=0;i<pname.length;i++){
            let match=product[i].getElementsByTagName('h2')[0];
            if(match){
                let textValue=match.innerHTML
                if(textValue.toUpperCase().indexOf(search)>-1){
                    product[i].style.display=""
                    document.getElementById('carousel-main').style.display="none"
                }
                else{
                    product[i].style.display="none"
                    document.getElementById('carousel-main').style.display="none"
                }
                if(search===""){
                    document.getElementById('carousel-main').style.display=""

                }
            }
        }
    }
    return(
        <div>
            <div className="home-main">
                <div className="navbar" id="navbarr">
                    <div style={{backgroundImage:`url(${require("./images/balaji.jpg")})`, height:"32px", width:"32px", backgroundSize:"cover", marginTop:"16px", marginLeft:"12px"}} className="home-button"onClick={handleHomeClick}>
                    </div>
                    <div style={{display:"flex"}}>
                        <img src={require("./images/search.png")} style={{height:"32px", width:"32px", marginTop:"18px"}} alt="search-icon"/>
                        <input type="text" placeholder="Search here" className="home-search" onKeyUp={search}></input>
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
                            (<button className="home-button " onClick={handleSignIn}>SignUp</button>)
                        }
                        <button className="home-button " onClick={handleAbout}>about</button>
                        <button className="home-button " onClick={handleHelp}>help</button>
                        <button className="home-button  icon" id="nav" onClick={navFunction}>click</button>
                    </div>
                </div>
                <div className="carousel-main" id="carousel-main">
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
                <div id="states-list">
                    <center>   
                        {StateHolder(AndhraPradesh, "Andhra Pradesh")}
                    </center>
                </div>
            </div>
        </div>
       
    )
}