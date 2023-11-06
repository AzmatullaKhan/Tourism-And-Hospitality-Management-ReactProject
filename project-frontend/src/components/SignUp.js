import { useState } from 'react';
import './zcss.css'
import {useNavigate} from 'react-router-dom';

function isValidEmail(email){
    let checker=email.substring(email.length-8);
    return checker==="@bas.com";
}
function isValidPassword(pass){
    let count = 0;
    if(!(pass.length>=8))
        return false;
    count++;
    for(let i=0;i<pass.length;i++){
        if(pass.charAt(i)>='A' && pass.charAt(i)<='Z'){
            count++;
            break;
        }
    }
    if(count!==2) return false;
    for(let i=0;i<pass.length;i++){
        if(!((pass.charAt(i)>='A' && pass.charAt(i)<='Z') && 
        (pass.charAt(i)>='a' && pass.charAt(i)<='z') &&
        pass.charAt(i)===' ')){
            count++;
            break;
        }
    }
    return count===3;
}
const SignUpPage = () =>{
    const [ signUp, setSignUp ]= useState({});
    const navigate=useNavigate();
    const navigateToLogin = (e) =>{
        e.preventDefault();
        navigate('/login');
    }
    const change = (e) =>{
        setSignUp({
            ...signUp,
            [e.target.name]:e.target.value
        });
    }
    const signUpClick= async(e)=>{
        e.preventDefault();
        const {name, emailSignUp, passwordSignUp}= signUp;
        if(!(name || emailSignUp || passwordSignUp)){
            alert("Enter data");
        }
        else if(isValidEmail(emailSignUp) && isValidPassword(passwordSignUp)){
            // const response=
            await fetch('https://bas-travels.onrender.com/signUpServer/addSignUp',{
                method: 'POST',
                body: JSON.stringify(signUp),
                headers: {
                    "Content-Type":'application/json'
                }
            })
            // const data = await response.json();
            // alert(JSON.stringify(data));
            navigate('/login');  
        }
        else{
            if(isValidEmail(emailSignUp)){
                alert('Password must be Strong(atleat one capital, atleast 8 characters, atleast one special charater)');
            }
            else if(isValidPassword(passwordSignUp)){
                alert('The provided email must should end with @bas.com')
            }
            else{
                alert('Give Valid details');
            }
        }
    }
    return(
        <div>
            <div className="main ">
            <div style={{backgroundImage:`url(${require("./images/logo-png.png")})`, height:"52px", width:"52px", backgroundSize:"cover", marginTop:"16px", marginLeft:"12px", position:"relative",top:"-120px", left:"-720px"}} className="home-button" onClick={()=>{navigate('/')}}></div>
                <form>
                    <div className='mini-main '>
                        <div style={{margin:"8px 12px 16px 12px"}}>
                            <label htmlFor='name'>Name</label><br></br>
                            <input type="text" id="name" name='name' onChange={change}></input>
                        </div>
                        <div style={{margin:"12px 12px 16px 12px"}}>
                            <label htmlFor='emailSignUp'>Email</label><br></br>
                            <input type="text" id='emailSignUp' name='emailSignUp' onChange={change}></input>
                        </div>
                        <div style={{margin:"12px 12px 40px 12px"}}>
                            <label htmlFor='passwordSignUp'>Password</label><br></br>
                            <input type="password" id='passwordSignUp' name='passwordSignUp' onChange={change}></input>
                        </div>
                        <center >
                            <button className='' onClick={signUpClick} type='submit'>SignUp</button>
                            <button className='' onClick={navigateToLogin}>Back(Login)</button>
                        </center>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUpPage;
