import { useState } from 'react'
import { desc1 } from './Home'
import './zcss.css'
import { useNavigate } from 'react-router-dom';
// export let bookingHotelDetails;
export let bookingUSerDetails;
export const BookPage1=()=>{
    const [booking, setBooking]=useState({})
    const navigate = useNavigate()
    const onChange=(e)=>{
        setBooking({
            ...booking,
            [e.target.id]:e.target.value
        })
    }
    const handleProceedPay=()=>{
        let {nameOfPerson, MobileNumOfPerson, numberOfPeopleHotel}=booking;
        bookingUSerDetails={nameOfPerson, MobileNumOfPerson, numberOfPeopleHotel}
        // alert(JSON.stringify(bookingUSerDetails)+"        "+ desc1.id)
        navigate('/payment');
    }
    return(
        <div>
            <div className="book-main">
                <div className='book-mini'>
                    <div className='book-mini-mini1'>
                        <div className="book-order">
                            <div className='glow'>
                                <p id='name'> Name of the Hotel: {desc1.nameHotel}</p>
                                <p id='state'>State of the Hotel: {desc1.stateHotel}</p>
                                <p id='place'>Place of the Hotel: {desc1.placeHotel}</p>
                                <p id='rooms'>Total Rooms Availble: {desc1.totalAvailableRoomsHotel}</p>
                                <p id='cost'>Total cost per night: {desc1.costPerNightHotel}</p>
                                <p id='rating'>Total Rating given: {desc1.ratingHotel}</p>
                                <div className='flex'>
                                    <label htmlFor='nameOfPerson'>Name of customer:</label>
                                    <input type='text' className='book-input' id='nameOfPerson' placeholder='Name of customer' onChange={onChange}></input>
                                </div>
                                <div className='flex'>
                                    <label htmlFor='mobileNumOfPerson'>Phone num of customer:</label>
                                    <input type='text' className='book-input' id='MobileNumOfPerson' placeholder='Mobile Number'  onChange={onChange}></input>
                                </div>
                                <div className='flex'>
                                    <label htmlFor='numberOfPeopleHotel'>Number of members:</label>
                                    <input type='text' className='book-input' id='numberOfPeopleHotel' placeholder='Number of people including kids' onChange={onChange} ></input>
                                </div>
                            </div>
                            <button className='glow' >Back</button>
                            <button className='glow' onClick={handleProceedPay}>Proceed to Pay</button>
                        </div>
                    </div>
                <div className='book-mini-mini2'> 
                    {/* <img src={desc1.url} alt='image' style={{height:"100%", width:"100%", backgroundSize:"cover"}}/> */}
                    <div style={{backgroundImage:`url(${desc1.pic})`, height:"100%", width:"100%", backgroundSize:"cover"}} ></div>
                </div>
            </div>
        </div>
    </div>
    )
}