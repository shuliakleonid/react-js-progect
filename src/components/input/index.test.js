import React from 'react';
import {shallow} from 'enzyme';
import Input from './input';

const render = (props) => shallow(<Input {...props}/>)

describe('Input component', () => {
  let sut;
  let props;
  describe('without props', () => {
    beforeEach(() => {
      sut = render(props)
    })

    it('should match snapshot', () => {
      expect(sut).toMatchSnapshot();
    })
  });

  describe('with props', () => {
    beforeEach(() => {
      props={
        placeholder: 'Input you data',
        name: 'search'
      }
      sut = render(props)
    })

    it('should match snapshot', () => {
      expect(sut).toMatchSnapshot();
    })
  });


})