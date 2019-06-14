import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from './Dashboard';

describe('Initial Render', () => {
  it('renders!', () => {
    const wrapper = shallow(<Dashboard />)

    expect(wrapper.text()).toEqual('Welcome to the Hackathon Dashboard Page')
  })
})
