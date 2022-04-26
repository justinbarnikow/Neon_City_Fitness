import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../comps/HomePage';

describe('HomePage component', () => {
  it('renders HomePage component without crashing', () => {
    shallow(<HomePage />)
  })
})