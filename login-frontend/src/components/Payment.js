import { useNavigate } from "react-router-dom";
import { bookingDetails } from "./Book";

export const PaymentPage = () =>{
    const navigate = useNavigate();
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
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
      let today=getTodayDate();
    let {nameHotel, placeHotel, stateHotel, costPerNightHotel}= bookingDetails;   
    return(
        <div className="payment-main center">
            <div className="payment-mini-main ">
            <   div className="center">
                    <label htmlFor="nameOfCustomerPayment">_NAME: </label>
                    <input type="text" className="payment-input glow" value={"name"} readOnly id="nameOfCustomerPayment"></input>
                </div>
                <div className="center">
                    <label htmlFor="numberOfCustomerPayment">PH_NO: </label>
                    <input type="text" className="payment-input glow" value={"mobile numbers"} readOnly id="numberOfHotelPayment"></input>
                </div>
                <div className="center">
                    <label htmlFor="memberOfCustomerPayment">_MEM_: </label>
                    <input type="text" className="payment-input glow" value={"mobile numbers"} readOnly id="memberOfHotelPayment"></input>
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
                    <input type="date" className="payment-input glow" min={getTodayDate()} value={today} id="fromDateOfHotelPayment"></input>
                </div>
                <div className="center">
                    <label htmlFor="toDateOfHotelPayment">__TO_: </label>
                    <input type="date" className="payment-input glow" min={getTodayDate()} id="toDateOfHotelPayment"></input>
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
    