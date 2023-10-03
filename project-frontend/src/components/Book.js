import { useState } from 'react';
import { useNavigate } from "react-router-dom"

import './zcss.css'
export let bookingHotelDetails;
export let bookingUSerDetails;
export const BookPage =()=>{
    const [ booking, setBook ] =useState({});
    const handleChangeDetails=(e)=>{
        setBook({
            ...booking,
            [e.target.id]:[e.target.value]
        })
    }
    const navigate= useNavigate()
    const handleBack= () =>{
        navigate('/');
    }
    const handleProceedToPay = ()=>{
        if(!(bookingHotelDetails))
            alert('Enter valid id')
        else{
            let {nameOfPerson, MobileNumOfPerson, numberOfPeopleHotel}=booking
            bookingUSerDetails={nameOfPerson, MobileNumOfPerson, numberOfPeopleHotel}
            navigate('/payment');
        }
    }
    const [ hotelId, setHotelId ]= useState({});
    const handleChangeID = (e) =>{
        setHotelId({
            ...hotelId,
            [e.target.id]:e.target.value
        });
    }
const handleClick =  async() =>{
    const response =await fetch('http://localhost:5000/hotelServer/find', {
        method: 'POST',
        body: JSON.stringify(hotelId),
        headers: {
            "Content-Type":'application/json'
        }
    })
    const data = await response.json();
    var name=document.getElementById('name');
    var state=document.getElementById('state');
    var place=document.getElementById('place');
    var rooms=document.getElementById('rooms');
    var rating=document.getElementById('rating');
    var cost=document.getElementById('cost');

    let {nameHotel, placeHotel, stateHotel, totalAvailableRoomsHotel, costPerNightHotel, ratingHotel}= data;
    bookingHotelDetails={nameHotel, placeHotel, stateHotel, totalAvailableRoomsHotel, costPerNightHotel, ratingHotel}

   if(!(nameHotel || placeHotel || stateHotel || totalAvailableRoomsHotel)){
       name.textContent="Name of the Hotel:  unidentified";
       state.textContent="State of the Hotel:  unidentified";
       place.textContent="Place of the Hotel:  unidentified";
       rooms.textContent="Total Rooms Availble:  unidentified";
    alert('Enter the valid ID by rechecking the ID of the hotel')
   }
   else{
    name.textContent="Name of the Hotel:  "+nameHotel;
    state.textContent="State of the Hotel:  "+stateHotel;
    place.textContent="Place of the Hotel:  "+placeHotel;
    rooms.textContent="Total Rooms Availble:  "+totalAvailableRoomsHotel;
    cost.textContent="Total cost per Night:  "+costPerNightHotel;
    rating.textContent="Total Rating given:  "+ratingHotel;
   }
}
    return(
        <div>
            <div className="book-main">
                <div className='book-mini'>
                    <div className='book-mini-mini1'>
                        <div className="book-order">
                                <div className='glow'>
                                <div className='flex'>
                                    <label htmlFor='idHotel'>ID number of Hotel:</label>
                                    <input type='text' id='idHotel' onChange={handleChangeID} className='book-input'placeholder='Enter ID of Hotel'></input>
                                    <button onClick={handleClick} className='glow'>check</button>
                                </div>
                                    <p id='name'> Name of the Hotel:</p>
                                    <p id='state'>State of the Hotel:</p>
                                    <p id='place'>Place of the Hotel:</p>
                                    <p id='rooms'>Total Rooms Availble:</p>
                                    <p id='cost'>Total cost per night:</p>
                                    <p id='rating'>Total Rating given:</p>
                                    <div className='flex'>
                                        <label htmlFor='nameOfPerson'>Name of customer:</label>
                                        <input type='text' className='book-input' id='nameOfPerson' placeholder='Name of customer' onChange={handleChangeDetails}></input>
                                    </div>
                                    <div className='flex'>
                                        <label htmlFor='mobileNumOfPerson'>Phone num of customer:</label>
                                        <input type='text' className='book-input' id='MobileNumOfPerson' placeholder='Mobile Number' onChange={handleChangeDetails}></input>
                                    </div>
                                    <div className='flex'>
                                        <label htmlFor='numberOfPeopleHotel'>Number of members:</label>
                                        <input type='text' className='book-input' id='numberOfPeopleHotel' placeholder='Number of people including kids' onChange={handleChangeDetails}></input>
                                    </div>
                                </div>
                                <button className='glow' onClick={handleBack}>Back</button>
                                <button className='glow' onClick={handleProceedToPay}>Proceed to Pay</button>
                            </div>
                        </div>
                    <div className='book-mini-mini2'> 
                        <h1>Other Section</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}