import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../assets/Bora Bora.jpeg'
import Barbados from '../../assets/Barbados.jpeg'
import Maldives from '../../assets/Maldives.jpeg'
import Grenada from '../../assets/Grenada.jpeg'
import EmeraldBay from '../../assets/Emerald Bay.jpeg'
import KeyWest from '../../assets/Key West.webp'

import SelectsImg from '../selectsImg/SelectsImg'


function Selects() {
  return (
    <div name='views' className="selects">
        <div className="container">
            <SelectsImg bgImg={BoraBora} text={'Bora Bora'} />
            <SelectsImg bgImg={Barbados} text={'Barbados'} />
            <SelectsImg bgImg={Maldives} text={'Maldives'} />
            <SelectsImg bgImg={Grenada} text={'Grenada'} />
            <SelectsImg bgImg={EmeraldBay} text={'Emerald Bay'} />
            <SelectsImg bgImg={KeyWest} text={'Key West'} />
        </div>
    </div>
  )
}

export default Selects
