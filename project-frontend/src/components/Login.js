import { useState } from 'react';
import './zcss.css'
import { useNavigate} from 'react-router-dom';

export let isLoggedIn=false;
export let userDetails;
export const handleLogout = () =>{
    window.location.reload();
    isLoggedIn=false;
}
export let data=null;
export function getData(){
     return JSON.stringify(data);
}
const LoginPage = () =>{
    const [ login, setLogin ]= useState({});
    const navigate = useNavigate();

    const navigateToSignUp = (e) =>{
        e.preventDefault();
        navigate('/signUp');
    }
    const change=(e)=>{
        setLogin({
            ...login,
            [e.target.name]:e.target.value
        });

    }
    const loginClick= async(e)=>{
        e.preventDefault();
        const response=await fetch('http://localhost:5000/loginServer/allLogins', {
            method: 'POST',
             body: JSON.stringify(login),
            headers: {
                "Content-Type": 'application/json'
            }
        })
      data= await response.json();
        let {emailSignUp}= data;
        if(emailSignUp!=null && emailSignUp === login.emailSignUp){
            isLoggedIn=true;
            let {name, emailSignUp}=data;
            userDetails={name, emailSignUp}
            navigate('/');
        }
        else{
            alert('Not matched');
        }
    }
    return(
        <div>
            <div className="main">
            <div style={{backgroundImage:`url(${require("./images/balaji.jpg")})`, height:"52px", width:"52px", backgroundSize:"cover", marginTop:"16px", marginLeft:"12px", position:"relative",top:"-120px", left:"-720px"}} className="home-button" onClick={()=>{navigate('/')}}></div>
                <form>
                    <div className='mini-main'>
                        <div style={{margin:"8px 12px 20px 12px"}} className=''>
                            <label htmlFor='email'>Email</label><br></br>
                            <input type="text" id="email" name='emailSignUp' onChange={change}></input>
                        </div>
                        <div style={{margin:"12px 12px 70px 12px"}}>
                            <label htmlFor='passwordSignUp'>Password</label><br></br>
                            <input type="password" id='password' name='passwordSignUp' onChange={change}></input>
                        </div>
                        <center >
                            <button className='' type='submit' onClick={loginClick}>Login</button>
                            <button className='' onClick={navigateToSignUp} type='submit'>SignUp</button><br></br>
                        </center>
                    </div>
                </form>
            </div>
        </div>
    )
}   
export default LoginPage;
