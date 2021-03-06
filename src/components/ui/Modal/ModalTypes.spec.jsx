import React from 'react';
import { shallow } from 'enzyme';
import { AddToCartModal, RemoveFromCartModal, SignUpModal } from './ModalTypes';

test('should render ModalTypes correctly', () => {
  const wrapper = shallow(<AddToCartModal />);
  expect(wrapper).toMatchSnapshot();
});
test('should render ModalTypes correctly', () => {
  const wrapper = shallow(<RemoveFromCartModal />);
  expect(wrapper).toMatchSnapshot();
});
test('should render ModalTypes correctly', () => {
  const wrapper = shallow(<SignUpModal />);
  expect(wrapper).toMatchSnapshot();
});
