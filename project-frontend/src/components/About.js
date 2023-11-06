import { useNavigate } from 'react-router-dom'
import './zcss.css'
export const AboutPage=()=>{
    const navigate = useNavigate();
    const handleBack = ()=>{
        navigate('/')
    }
    return(
        <div>
            <div className='about-main'>
                <div className='about-mini-main'>
                <div style={{backgroundImage:`url(${require("./images/logo-png.png")})`, height:"52px", width:"52px", backgroundSize:"cover", marginTop:"16px", marginLeft:"12px", position:"relative", left:"-720px"}} className="home-button" onClick={()=>{navigate('/')}}></div>
                    <h1 className='payment-head'>TOURIST AND HOSPITALITY MANAGEMENT</h1>
                    <div className='about-groupLogo'></div>
                    <h1>MEET OUR TEAM</h1>
                    <h1>We are all different. We are born in different cities, at different times, we love different music, food, movies. But we have something that 
                    unites us all. It is our project. We are its heart, we are not just a team we are family. In this journey, we've discovered that "unity in diversity", 
                    is not just a phrase but a living reality. Our differences have become our greatest assets, bringing fresh perspectives to every challenge and 
                    infusing creativity into every solution. It's in the spirited debates, the collaborative problem-solving, and the shared laughter during 
                    breaks that we've found the true essence of teamwork.</h1>
                    <div className='about-display'>
                        <div className='about-details'>
                            <div className='about-pic1'></div>
                            <h1>The Code Wizard</h1>
                            <h1>KL Student</h1>
                            <a href='https://github.com/AzmatullaKhan' className='glow'>GitHub</a>
                        </div>
                        <div className='about-details'>
                            <div className='about-pic2'></div>
                            <h1>Leader</h1>
                            <h1>KL Student</h1>
                            <a href='https://github.com/santhosh289953' className='glow'>GitHub</a>
                        </div>
                        <div className='about-details'>
                            <div className='about-pic3'></div>
                            <h1>The Visionary Architect</h1>
                            <h1>KL Student</h1>
                            <a href='https://github.com/balajich004' className='glow'>GitHub</a>
                        </div>
                    </div>
                    <div className='about-all'>
                        <h1>group pic</h1>
                    </div>
                    <h1 className='payment-head'>Thank you</h1>
                    <div>
                        <button onClick={handleBack} className='glow'>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}