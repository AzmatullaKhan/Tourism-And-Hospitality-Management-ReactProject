// import { lements } from './Data'
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { useRef } from 'react';
import { innerHotelsPics } from './Home'
import './zcss.css'
import { useNavigate } from 'react-router-dom';

export let desc1;

export const Hotels=()=>{
    const navigate=useNavigate()
    let {innerHotels}=innerHotelsPics
    // const Ref= useRef(null);
    // const scrollAmount = 248;
    const clickHandler=(element)=>{
        const {id,  pic, desc, nameHotel, placeHotel, stateHotel, totalAvailableRoomsHotel, costPerNightHotel, ratingHotel, url}=(element);
        desc1={id,  pic, desc, nameHotel, placeHotel, stateHotel, totalAvailableRoomsHotel, costPerNightHotel, ratingHotel, url}
        navigate('/bookPage')
    }
    return(
        <div>
            <div className="hotel-main">
                <h1>Hotels Availble in {innerHotels[0].stateHotel}</h1>
                <div className='hotel-mini'>
                    <div className='show-desc' onClick={() => clickHandler(innerHotels[0])}>
                        <img src={require(`${innerHotels[0].pic}`)} alt={innerHotels[0].id} className="hotel-image"/>
                        <div className="hidden-desc">
                            <h1 style={{backgroundColor:"black"}}>{innerHotels[0].desc}</h1>
                        </div>
                    </div>
                    <div className='show-desc' onClick={() => clickHandler(innerHotels[1])}>
                        <img src={require(`${innerHotels[1].pic}`)} alt={innerHotels[1].id} className="hotel-image"/>
                        <div className="hidden-desc">
                            <h1 style={{backgroundColor:"black"}}>{innerHotels[1].desc}</h1>
                        </div>
                    </div>
                    <div className='show-desc' onClick={() => clickHandler(innerHotels[2])}>
                        <img src={require(`${innerHotels[2].pic}`)} alt={innerHotels[2].id} className="hotel-image"/>
                        <div className="hidden-desc">
                            <h1 style={{backgroundColor:"black"}}>{innerHotels[2].desc}</h1>
                        </div>
                    </div>
                    <div className='show-desc' onClick={() => clickHandler(innerHotels[3])}>
                        <img src={require(`${innerHotels[3].pic}`)} alt={innerHotels[3].id} className="hotel-image"/>
                        <div className="hidden-desc">
                            <h1 style={{backgroundColor:"black"}}>{innerHotels[3].desc}</h1>
                        </div>
                    </div>
                </div>
                <div className='hotel-mini'>
                    <div className='show-desc' onClick={() => clickHandler(innerHotels[4])}>
                        <img src={require(`${innerHotels[4].pic}`)} alt={innerHotels[4].id} className="hotel-image"/>
                        <div className="hidden-desc">
                            <h1 style={{backgroundColor:"black"}}>{innerHotels[4].desc}</h1>
                        </div>
                    </div>
                    <div className='show-desc' onClick={() => clickHandler(innerHotels[5])}>
                        <img src={require(`${innerHotels[5].pic}`)} alt={innerHotels[5].id} className="hotel-image"/>
                        <div className="hidden-desc">
                            <h1 style={{backgroundColor:"black"}}>{innerHotels[5].desc}</h1>
                        </div>
                    </div>
                    <div className='show-desc' onClick={() => clickHandler(innerHotels[6])}>
                        <img src={require(`${innerHotels[6].pic}`)} alt={innerHotels[6].id} className="hotel-image"/>
                        <div className="hidden-desc">
                            <h1 style={{backgroundColor:"black"}}>{innerHotels[6].desc}</h1>
                        </div>
                    </div>
                    <div className='show-desc' onClick={() => clickHandler(innerHotels[7])}>
                        <img src={require(`${innerHotels[7].pic}`)} alt={innerHotels[7].id} className="hotel-image"/>
                        <div className="hidden-desc">
                            <h1 style={{backgroundColor:"black"}}>{innerHotels[7].desc}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}