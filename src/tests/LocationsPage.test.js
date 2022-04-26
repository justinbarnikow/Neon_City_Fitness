import React from 'react';
import { shallow } from 'enzyme';
import LocationsPage from '../comps/LocationsPage'

describe('LocationsPage component', () => {
  it('renders LocationsPage component without crashing', () => {
    shallow(<LocationsPage />)
  })
})