import React from 'react';
import { shallow } from 'enzyme';
import ContactPage from '../comps/ContactPage';

describe('ContactPage component', () => {
  it('renders ContactPage component without crashing', () => {
    shallow(<ContactPage />)
  })
})