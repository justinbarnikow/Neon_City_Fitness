import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ContactPage from './comps/ContactPage'
import HomePage from './comps/HomePage'
import JoinPage from './comps/JoinPage'
import LocationsPage from './comps/LocationsPage'
import MembershipsPage from './comps/MembershipsPage'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/locations' element={<LocationsPage />} />
          <Route path='/memberships' element={<MembershipsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/join' element={<JoinPage />} />
        </Routes>
      </div>
    )
  }
}
