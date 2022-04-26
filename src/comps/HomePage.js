import React from 'react'
import Header from './Header'
import '../style/HomePage.css'

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <div className='hero'>
          <img className='banner' alt='banner gym photo' src="https://i.pinimg.com/originals/b0/f9/6c/b0f96c3d6095dfff58f563059de425ae.jpg" ></img>

        </div>
      </main>
    </div>
  )
}

export default HomePage