import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/Gold.jpg'

export default function Search() {
  return (
    <div name='book' className="search">
        <div className="container">
            <div className="left">
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                   optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                   obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                   nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                   tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                   quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                   sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                   recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                   minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                   quibusdam sed amet tempora.
                </p>
            <div className="search-col-2">
                <div className="box">
                    <div>
                        <img src={Gold} alt="/" style={{marginRight: '1rem'}} />
                    </div>
                    <div>
                        <h3>WORLD'S LEADING</h3>
                        <p>ALl-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
                <div className="box">
                    <div>
                        <h3>NO ONE INCLUDES MORE</h3>
                        <p>ALl-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        <button>View Packages</button>
                    </div>
                </div>
            </div>
            </div>
            <div className="right">
                <div className="promo">
                    <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
                    <p className="timer">12 HOURS LEFT!</p>
                    <p className="offers">VIEW ALL CURRENT OFFERS</p>
                </div>
                <form>
                    <div className="input-wrap">
                        <label>Destination</label>
                        <select>
                            <option value="1">Grande Antigua</option>
                            <option value="1">Grande</option>
                            <option value="1">Emerald Bay</option>
                            <option value="1">Bora Bora</option>
                            <option value="1">Key West</option>
                            <option value="1">Maldives</option>
                            <option value="1">Barbados</option>
                        </select>
                    </div>
                    <div className="date">
                        <div className="input-wrap">
                            <label>Check-In</label>
                            <input type="date" />
                        </div>
                        <div className="input-wrap">
                            <label>Check-Out</label>
                            <input type="date" />
                        </div>
                    </div>
                    <button>Rates & Availabilities</button>
                </form>
            </div>
        </div>
    </div>
  )
}
