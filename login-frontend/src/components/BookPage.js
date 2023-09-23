import { useState } from 'react';

export const BookPage = () => {
    const { nameHotel, placeHotel, stateHotel, totalAvailableRoomsHotel } = null;
    const [hotelId, setHotelId] = useState({});
    const handleChangeID = (e) => {
        setHotelId({
            ...hotelId,
            [e.target.id]: e.target.value
        });
    };
    const handleClick = async() => {
        var hid = document.getElementsByClassName('hidden');
        const response = await fetch('http://localhost:5000/hotelServer/find', {
            method: 'POST',
            body: JSON.stringify(hotelId),
            headers: {
                "Content-Type": 'application/json'
            }
        });

        const data = await response.json(); { nameHotel, placeHotel, stateHotel, totalAvailableRoomsHotel; }
        data;
        console.log(nameHotel, placeHotel, stateHotel, totalAvailableRoomsHotel);
        hid.style.display = 'block';
    };
    return ( <
        div >
        <
        div className = "book-main" >
        <
        div className = 'book-mini' >
        <
        div className = 'book-mini-mini' >
        <
        h1 > Random < /h1> <
        /div> <
        div className = 'book-mini-mini' >
        <
        div className = "book-order" >
        <
        input type = 'text'
        id = 'idHotel'
        onChange = { handleChangeID } > < /input> <
        button onClick = { handleClick } > Click to get details < /button> <
        div className = 'hidden' >
        <
        h1 > { nameHotel } < /h1> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};