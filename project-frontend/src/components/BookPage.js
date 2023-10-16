import { useState } from 'react'
import { desc1 } from './Hotels'
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
    const handleBack=()=>{
        navigate('/hotels')
    }
    return(
        <div>
            <div className="book-main">
                <div className='book-mini'>
                    <div className='book-mini-mini1'>
                        <div className="book-order" style={{marginTop:"-26px"}}>
                            <div className='flex'>
                                <p id='name'> Name of the Hotel: </p>
                                <p>{desc1.nameHotel}</p>
                            </div>
                            <div className='flex'>
                                <p id='state'>State of the Hotel: </p>
                                <p>{desc1.stateHotel}</p>
                            </div>
                            <div className='flex'>
                                <p id='place'>Place of the Hotel:</p>
                                <p>{desc1.placeHotel}</p>
                            </div>
                            <div className='flex'>
                                <p id='rooms'>Total Rooms Availble:</p>
                                <p>{desc1.totalAvailableRoomsHotel}</p>
                            </div>
                            <div className='flex'>
                            <   p id='cost'>Total cost per night:</p>
                                <p>{desc1.costPerNightHotel}</p>
                            </div>
                            <div className='flex'>
                            <p id='rating'>Total Rating given:</p>
                                <p>{desc1.ratingHotel}</p>
                            </div>
                            <div className='flex'>
                                <label htmlFor='nameOfPerson' className='lab'>Name of customer:</label>
                                <input type='text' className='book-input' id='nameOfPerson' placeholder='Name of customer' onChange={onChange} style={{marginLeft:"32px"}}></input>
                            </div>
                            <div className='flex'>
                                <label htmlFor='mobileNumOfPerson' className='lab'>Phone num of customer:</label>
                                <input type='text' className='book-input' id='MobileNumOfPerson' placeholder='Mobile Number'  onChange={onChange}></input>
                            </div>
                            <div className='flex'>
                                <label htmlFor='numberOfPeopleHotel' className='lab'>Number of members:</label>
                                <input type='text' className='book-input' id='numberOfPeopleHotel' placeholder='Number of people including kids' onChange={onChange} style={{marginLeft:"22xpx"}}></input>
                            </div>
                            <button className=' ' onClick={handleBack}>Back</button>
                            <button className=' ' onClick={handleProceedPay}>Proceed to Pay</button>
                        </div>
                    </div>
                <div className='book-mini-mini2'> 
                    {/* <img src={desc1.url} alt='image' style={{height:"100%", width:"100%", backgroundSize:"cover"}}/> */}
                    <div style={{backgroundImage:`url(${desc1.url})`, height:"100%", width:"100%", backgroundSize:"cover", borderRadius:"12px"}} ></div>
                </div>
            </div>
        </div>
    </div>
    )
}