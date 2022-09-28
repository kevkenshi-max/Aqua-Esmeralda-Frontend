import React from 'react'
import './DestinationsStyles.css'

import BoraBora from '../../assets/Bora Bora.jpeg'
import Barbados from '../../assets/Barbados.jpeg'
import Maldives from '../../assets/Maldives.jpeg'
import Grenada from '../../assets/Grenada.jpeg'
import EmeraldBay from '../../assets/Emerald Bay.jpeg'


function Destinations() {
  return (
    <div className="destinations">
        <div className="container">
            <h1>All-Inclusive Resorts</h1>
            <p>On the Caribbean's Best Beaches</p>
            <div className="img-container">
                <img className='span-3 image-grid-row-2' src={BoraBora} alt='/'/>
                <img src={Barbados} alt='/'/>
                <img src={Maldives} alt='/'/>
                <img src={Grenada} alt='/'/>
                <img src={EmeraldBay} alt='/'/>
            </div>
        </div>
    </div>
  )
}

export default Destinations
