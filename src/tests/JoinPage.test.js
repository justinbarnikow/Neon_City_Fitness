import React from 'react';
import { shallow } from 'enzyme';
import JoinPage from '../comps/JoinPage';

describe('JoinPage component', () => {
  it('renders JoinPage component without crashing', () => {
    shallow(<JoinPage />)
  })
})