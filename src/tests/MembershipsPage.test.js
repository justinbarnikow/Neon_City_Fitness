import React from 'react';
import { shallow } from 'enzyme';
import MembershipsPage from '../comps/MembershipsPage';

describe('MembershipsPage component', () => {
  it('renders MembershipsPage component without crashing', () => {
    shallow(<MembershipsPage />)
  })
})