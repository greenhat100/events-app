"use client"
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { eventsData } from '../eventData'
import { BsStarFill, BsStar, BsFillGeoAltFill } from "react-icons/bs";
import ToMarker from "./toMarker";
import Filter from "./Filter";


const tileLayerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";


//generate icon
const generateSvgIcon = (fillColor: string): string => {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${fillColor}" width="30px" height="50px">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-6h2v-4h-2v4zm0-6h2V7h-2v3z"/>
      </svg>
    `;
  };

//default position washington dc
//const defaultPosition: [number, number] = [38.8951, -77.0364];


const Map = () => {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const [activeEvent, setActiveEvent] = useState<HistoricalEvent | null>()

    const[favorites, setFavorites] = useState<number[]>(() => {
        const savedFavorites = localStorage.getItem('favorites')
        return(
            savedFavorites ? JSON.parse(savedFavorites) : []
        )
    })

    const handleFaveClick = (eventId: number) => {
        let updatedFavorites = favorites.filter((id) => id !== eventId);
      
        if (!favorites.includes(eventId)) {
          updatedFavorites = [eventId, ...updatedFavorites];
        }
      
        console.log(updatedFavorites); // Log the updated favorites to the console
      
        setFavorites(updatedFavorites);
      };
    
    const handleItemClick = (eventId: number) => {

        const event = eventsData.find((event) => event.id === eventId)
        if(event){
            setActiveEvent(event)
        }
    }  

    return (
        <section className="content" style={{ height: '100vh' }}>
        <div className='map-content flex flex-col gap-6 h-full'>
            <Filter setSelectedCategory={setSelectedCategory} />
          <MapContainer center={[50.5, 30.5]} zoom={2} style={{ height: '100%', width: '100%' }} className="map-container">
            <TileLayer url={tileLayerUrl} />
            
            {eventsData.filter((event) => !selectedCategory || event.category === selectedCategory).map((event) => {
               console.log('Event:', event);
              console.log('Icon HTML:', generateSvgIcon('red'));

             return (
                    <Marker
                       key={event.id}
                       position={event.position}
                       icon={L.divIcon({
                       className: 'custom-icon',
                       html: generateSvgIcon('red'),
                       iconSize: [30, 50],
                     })}
                      eventHandlers={{
                       click: () => {
                        setActiveEvent(event);
            },
           }}
               />
         );
})}

            {activeEvent  &&(
                <Popup position={activeEvent.position}>
        <div className='popup-inner' id="popup">
          <h3 className='popup-inner__title'>{activeEvent.title}</h3>
            <br />
           <h4 className='font-bold text-lg'>{activeEvent.year}</h4>
           <p className='popup-inner__description'>{activeEvent.description}</p>
           <button className="popup-inner__button" onClick={() => handleFaveClick(activeEvent.id)}>
            {favorites.includes(activeEvent.id) ? (
             <span><BsStarFill /> Unfavorite</span>
            ) : (
            <span><BsStar /> Favorite</span>
            )}
           </button>
        </div>
        </Popup>
            )}
            {
                activeEvent && (<ToMarker position={activeEvent.position} zoomLevel={5} />)
            }
          </MapContainer>
        </div>
        <div className="liked-events">
            <h2 className='liked-events_title'>{favorites.length} Favorite Events</h2>
            <ul>
                {
                    favorites.map((id) => {
                        return  eventsData.find((event) => event.id === id)  
                        
                    }).map((event) => {
                       return( 
                       <li key={event?.id} className='liked-events_event' onClick={() => {
                        handleItemClick(event?.id as number)
                       }}>
                         <h3>{event?.title}</h3>
                       </li>
                       )
                    })
                }
            </ul>
        </div>
      </section>
    );
  }
  
  export default Map;
