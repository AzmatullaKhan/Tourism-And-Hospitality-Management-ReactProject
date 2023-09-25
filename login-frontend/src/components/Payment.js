import { useNavigate } from "react-router-dom";
import { bookingHotelDetails, bookingUSerDetails } from "./Book";

export const PaymentPage = () =>{
    const navigate = useNavigate();
    const handleNumberOfDays = () =>{
        var start = document.getElementById('fromDateOfHotelPayment');
        var to = document.getElementById('toDateOfHotelPayment')
        console.log(start.value-to.value)
        // var days=document.getElementById('daysOfHotelPayment')
        // days.textContent=to-start
    }
    const handleBack= ()=>{
        navigate('/book')
    }
    const handleHome= ()=>{
        navigate('/')
    }
    const handlePay= ()=>{
        alert('payment done')
    }
    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    //   let today=getTodayDate();
    let {nameHotel, placeHotel, stateHotel, costPerNightHotel}= bookingHotelDetails;
    let {nameOfPerson, MobileNumOfPerson, numberOfPeopleHotel}= bookingUSerDetails;
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
                    <input type="text" className="payment-input glow" value={costPerNightHotel} readOnly id="costOfHotelPayment"></input>
                </div>
                <div className="center">
                    <label htmlFor="fromDateOfHotelPayment">_FROM: </label>
                    <input type="date" className="payment-input glow" min={getTodayDate()} id="fromDateOfHotelPayment"></input>
                </div>
                <div className="center">
                    <label htmlFor="toDateOfHotelPayment">__TO_: </label>
                    <input type="date" className="payment-input glow" min={getTodayDate()}  id="toDateOfHotelPayment" onChange={handleNumberOfDays}></input>
                </div>
                <div className="center">
                    <label htmlFor="daysOfHotelPayment">_DAYS: </label>
                    <input type="text" className="payment-input glow" value={"Total no.of days"} id="daysOfHotelPayment" readOnly></input>
                </div>
                <div className="center">
                    <button className="glow" onClick={handlePay}>PAY</button>                    
                 </div>
                 <button onClick={handleBack}>back</button>
                 <button onClick={handleHome}>home</button>
            </div>
        </div>
    );
}
    