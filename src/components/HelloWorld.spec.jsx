import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render, ReactWrapper } from 'enzyme';
import HelloWorld from './HelloWorld';

describe('<HelloWorld />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = null;
  });

  it('should contain the world "Hello"', () => {
    const wrapper = shallow(<HelloWorld name='testname'/>);
    expect(wrapper.text()).to.contain('Hello');
  });

  it('should render with prop name', () => {
    const wrapper = shallow(<HelloWorld name='testname'/>);
    expect(wrapper.text()).to.contain('Hello testname');
  });

});
