import { useNavigate } from "react-router-dom";
import { bookingUSerDetails } from "./BookPage";
import { useState } from "react";
import { desc1 } from "./Home";

export const PaymentPage = () =>{
    
    const navigate = useNavigate();
    const handleNumberOfDays = () =>{
        document.getElementById('paymentPay').style.display='none';
        document.getElementById('paymentConfirm').style.display='block';
        document.getElementById('daysOfHotelPayment').value="Error";
        document.getElementById('totalCostOfHotelPayment').value="Error";
    }
    const handleBack= ()=>{
        navigate('/book')
    }
    const handleHome= ()=>{
        navigate('/')
    }
    let {nameHotel, placeHotel, stateHotel, costPerNightHotel}= desc1;
    let indianCostPerNight= costPerNightHotel;
    let {nameOfPerson, MobileNumOfPerson, numberOfPeopleHotel}= bookingUSerDetails;
    const [paymentForm, setPaymentForm]= useState({});
    function setPaymentFormDetails(){
        setPaymentForm({
            ...paymentForm,
            nameOfCustomerPayment:String(nameOfPerson), numberOfCustomerPayment:String(MobileNumOfPerson), 
            membersOfCustomerPayment:String(numberOfPeopleHotel), nameOfHotelPayment:String(nameHotel), 
            stateOfHotelPayment:String(stateHotel), placeOfHotelPayment:String(placeHotel), 
            costOfHotelPayment:String(costPerNightHotel), 
            fromDateOfHotelPayment:String(document.getElementById('fromDateOfHotelPayment').value), 
            toDateOfHotelPayment:String(document.getElementById('toDateOfHotelPayment').value), 
            daysOfHotelPayment:String(document.getElementById('daysOfHotelPayment').value), 
            totalCostOfHotelPayment:String(document.getElementById('totalCostOfHotelPayment').value)
        })
    }
    const handleConfirm= ()=>{
        var start = new Date(document.getElementById('fromDateOfHotelPayment').value);
        var to = new Date(document.getElementById('toDateOfHotelPayment').value)
        // var months=String(to.getMonth()+1)-String(start.getMonth()+1)
        var days=String(to.getDate())-String(start.getDate());
        if(to.getMonth()>=start.getMonth()){
            if(to.getMonth()>start.getMonth()){
                if(to.getMonth()===1 && start.getMonth()===1)
                    days=days+((to.getMonth()-start.getMonth())*28);
                else 
                    days=days+((to.getMonth()-start.getMonth())*30);
            }
            if(to.getDate()<=start.getDate() && to.getMonth()===start.getMonth()){
                alert('please verify the date again to continue');
                document.getElementById('daysOfHotelPayment').value="Error";
                document.getElementById('totalCostOfHotelPayment').value="Error";
            }
            else{
                // days=days((to.getMonth()-start.getMonth()+2)*30);months+" months "+
                document.getElementById('daysOfHotelPayment').value=(days +" days");
                document.getElementById('totalCostOfHotelPayment').value=new Intl.NumberFormat('en-IN').format((String(days)*costPerNightHotel))+ " rupees only";
                document.getElementById('paymentPay').style.display='block';
                document.getElementById('paymentConfirm').style.display='none';
            }
        }
        else{
            document.getElementById('daysOfHotelPayment').value="Error";
            document.getElementById('totalCostOfHotelPayment').value="Error";
            alert('please verify the date again to continue');
        }
        setPaymentFormDetails();
    }
    const handlePay= async()=>{
        await fetch("http://localhost:5000/paymentServer/addPayment",{
        method: 'POST',
        body: JSON.stringify(paymentForm),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        navigate('/')
    }
    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    return(
        <div className="payment-main center">
            <div className="payment-mini-main ">
            <   div className="center">
                    <label htmlFor="nameOfCustomerPayment">_NAME: </label>
                    <input type="text" className="payment-input glow" value={nameOfPerson} readOnly id="nameOfCustomerPayment"></input>
                </div>
                <div className="center">
                    <label htmlFor="numberOfCustomerPayment">PH_NO: </label>
                    <input type="text" className="payment-input glow" value={MobileNumOfPerson} readOnly id="numberOfCustomerPayment"></input>
                </div>
                <div className="center">
                    <label htmlFor="membersOfCustomerPayment">_MEM_: </label>
                    <input type="text" className="payment-input glow" value={numberOfPeopleHotel} readOnly id="membersOfCustomerPayment"></input>
                </div>
                <div className="center">
                    <label htmlFor="nameOfHotelPayment">HOTEL: </label>
                    <input type="text" className="payment-input glow" value={nameHotel} readOnly id="nameOfHotelPayment"></input>
                </div>
                <div className="center">
                    <label htmlFor="stateOfHotelPayment">STATE: </label>
                    <input type="text" className="payment-input glow" value={stateHotel} readOnly id="stateOfHotelPayment"></input>
                </div>
                <div className="center">
                    <label htmlFor="placeOfHotelPayment">PLACE: </label>
                    <input type="text" className="payment-input glow" value={placeHotel} readOnly id="placeOfHotelPayment"></input>
                </div>
                <div className="center">
                    <label htmlFor="costOfHotelPayment">_COST: </label>
                    <input type="text" className="payment-input glow" value={new Intl.NumberFormat('en-IN').format(indianCostPerNight)} readOnly id="costOfHotelPayment"></input>
                </div>
                <div className="center">
                    <h1>Enter the data below this....</h1>
                </div>
                <div className="center">
                    <label htmlFor="fromDateOfHotelPayment">_FROM: </label>
                    <input type="date" className="payment-input glow" min={getTodayDate()} id="fromDateOfHotelPayment" onChange={handleNumberOfDays}></input>
                </div>
                <div className="center">
                    <label htmlFor="toDateOfHotelPayment">__TO_: </label>
                    <input type="date" className="payment-input glow" min={getTodayDate()}  id="toDateOfHotelPayment" onChange={handleNumberOfDays}></input>
                </div>
                <div className="center">
                    <label htmlFor="daysOfHotelPayment">_DAYS: </label>
                    <input type="text" className="payment-input glow" id="daysOfHotelPayment" readOnly></input>
                </div>
                <div className="center">
                    <label htmlFor="totalCostOfHotelPayment">TOTAL: </label>
                    <input type="text" className="payment-input glow" id="totalCostOfHotelPayment" readOnly></input>
                </div>
                <div className="center">
                    <button className="glow" onClick={handleConfirm} id="paymentConfirm">Confirm</button>                    
                    <button className="glow" onClick={handlePay} id='paymentPay' style={{display:"none"}}>PAY</button>
                 </div>
                 <button onClick={handleBack}>back</button>
                 <button onClick={handleHome}>home</button>
            </div>
        </div>
    );
}
    