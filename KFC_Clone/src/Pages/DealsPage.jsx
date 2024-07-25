import React, { useState, useEffect } from 'react';
import Deals from '../assets/KFC-Complete-Treat.jpg';
import { useDisclosure } from '@chakra-ui/react';
import OfferModal from '../Component/OfferModal';
import OrderModal from '../Component/OrederModal'; 
import {useNavigate} from 'react-router-dom';
import './DealsPage.css';

function DealsPage() {
    const [data, setData] = useState([]);
    const [last, setLast] = useState(9);
    const [selectedOffer, setSelectedOffer] = useState(null); 
    const [isOrderModalOpen, setOrderModalOpen] = useState(false); 
    const { isOpen: isOfferModalOpen, onOpen: openOfferModal, onClose: closeOfferModal } = useDisclosure(); 
    const navigate=useNavigate();

    
    async function fetchData() {
        let res = await fetch(`http://localhost:3000/Deals?_start=0&_end=${last}`);
        let data = await res.json();
        setData(data);
    }

    useEffect(() => { fetchData() }, [last]);

  
    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.substring(0, maxLength) + '...';
        }
        return title;
    };

   
    const handleViewDetails = (offer) => {
        setSelectedOffer(offer); 
        openOfferModal();
    };

    
    const handleApplyOffers = () => {
        setOrderModalOpen(true); 
    };
    function signin()
    {
        navigate('/login')
    }

    return (
        <>
            <div className="header-banner">
                <div className="header-inner">
                    <div className="header-text">
                        Let's Order for Delivery, Pick Up, OR Dine-IN
                    </div>
                    <button className='header-button' onClick={handleApplyOffers}>
                        <span>Start Order</span>
                    </button>
                </div>
            </div>
            <div className="banner">
                <div className="deals-header-image">
                    <img src={Deals} alt="Deals" />
                    <h2 className="deals-image-text">OFFERS</h2>
                </div>
            </div>
            <div className="box">
                <div className="container">
                    <div className="deals-stripe">
                        <img className="deals-stripe-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg==" alt="Deals Stripe" />
                        <div className="deals-header-text-container">
                            <h1>National Offers</h1>
                            <button className="login-text" onClick={signin}>Sign In to see exclusive offers &amp; deals</button>
                        </div>
                    </div>
                    {data.map((el) => (
                        <div className="card" key={el.id}>
                            <img src={el.url} alt="Offer" />
                            <div className='description'>
                                <h1 className='title'>{truncateTitle(el.title, 16)}</h1>
                                <p>{truncateTitle(el.title, 60)}</p>
                            </div>
                            <div className="deal-button">
                                <button className='view-btn' onClick={() => handleViewDetails(el)}>View Details</button>
                                <button className='apply-btn' onClick={handleApplyOffers}>Apply Offers</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {last < 18 && (
                <div className="load-div">
                    <button className='load-btn' onClick={() => setLast(last + 9)}>
                        Load More
                    </button>
                </div>
            )}
            <OrderModal isOpen={isOrderModalOpen} onClose={() => setOrderModalOpen(false)} />
            {selectedOffer && (
                <OfferModal 
                    isOpen={isOfferModalOpen} 
                    onClose={closeOfferModal} 
                    offer={selectedOffer}
                />
            )}
        </>
    );
}

export default DealsPage;
