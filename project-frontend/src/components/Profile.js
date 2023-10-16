import './zcss.css'
import { userDetails } from './Login'
let data;
export const Profile=()=>{
    let {name, emailSignUp}=userDetails;
    
    const getOrder=async()=>{
        let num=document.getElementById('numberOfCustomer').textContent;
        let data2={"numberOfCustomerPayment":String(num)}
        
        const res=await fetch("http://localhost:5000/paymentServer/getPayments",{
            method: 'POST',
            body: JSON.stringify(data2),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let order= await res.json()
        const {u}=order
        data=u
        console.log(data.nameOfHotelPayment)
        }
    return(
        <div className='profile-main'>
            <div className='user-profile'>
                <div className='flex-p'>
                    <p>Name:</p>
                    <p style={{marginLeft:"40px", textDecoration:"underline"}}>{name}</p>
                </div>
                <div className='flex-p'>
                    <p>Mail:</p>
                    <p style={{marginLeft:"50px", textDecoration:"underline"}}>{emailSignUp}</p>
                </div>
                <div className='flex-p'>
                    <p>Mobile:</p>
                    <p style={{marginLeft:"30px", textDecoration:"underline"}} id="numberOfCustomer">9493324356</p>
                </div>
            </div>
            <div className='bookings'>
                <center><h2 style={{color:"black", fontWeight:"200"}} onClick={getOrder}>All bookings</h2></center>
                {/* <div className='flex-p'>
                    <p>address</p>
                    <p>{data.stateOfHotelPayment}, {data.placeOfHotelPayment}, {data.nameOfHotelPayment}</p>
                </div> */}
            </div>
        </div>
    )
}