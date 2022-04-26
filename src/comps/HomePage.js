import React from 'react'
import Header from './Header'
import '../style/HomePage.css'

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <div className='hero'>
          <img className='banner' alt='banner gym photo' src="https://cdn.thespaces.com/wp-content/uploads/2020/01/Fernanda_Orozco_Refuse_Cycling-11.jpg" ></img>
          <span className='bannerText_first'>BE GREAT. BE</span>
          <span className='bannerText_second'>NEON<span className='period'>.</span></span>
          <span className='bannerText_third'>Sign up at a discounted rate.</span>
          <button className='banner_button'>JOIN NOW.</button>
        </div>
      </main>
    </div>
  )
}

export default HomePage