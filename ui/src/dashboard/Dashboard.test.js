import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from './Dashboard';
import { expect } from "chai";

describe('<Dashboard>', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Dashboard />);
  });

  it("renders search box", () => {
    expect(wrapper.find("[aria-describedby='btnGroupSearch']")).to.have.length(1);
  });

  it("renders loader", () => {
    expect(wrapper.find(".lds-roller")).to.have.length(1);
  });

  it("renders CSVLink", () => {
    expect(wrapper.find("CSVLink")).to.have.length(1);
  });

  it("renders selectedYear", () => {
    expect(wrapper.find(".selectedYear")).to.have.length(1);
  });

  
  it("renders navigation icons", () => {
    expect(wrapper.find("i")).to.have.length(1);
  });



  
})
