import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import BoraBora from '../../assets/Bora Bora.jpeg'
import EmeraldBay from '../../assets/Emerald Bay.jpeg'
import KeyWest from '../../assets/Key West.webp'

function ImgCarousel() {
  return (
    <div name='carousel' className="container">
        <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true} >
          <div>
              <img src={BoraBora} alt='/' />
          </div>
          <div>
              <img src={EmeraldBay} alt='/' />
          </div>
          <div>
              <img src={KeyWest} alt='/' />
          </div>
        </Carousel>
    </div>
  )
}

export default ImgCarousel
