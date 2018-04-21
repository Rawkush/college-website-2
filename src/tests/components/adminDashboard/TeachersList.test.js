import React from 'react';
import { shallow } from 'enzyme';
import './../../__mocks__/localStorage';
import axios from './../../__mocks__/axios';
import TeacherList from './../../../components/adminDashboard/TeachersList';

describe('<TeachersList />', () => {
  test('should render the component properly w/ Loading', () => {
    const wrapper = shallow(<TeacherList />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should call the axios and with correct arguments', () => {
    expect(axios.called).toBeTruthy();
    expect(
      axios.calledWith({
        method: 'post',
        url: '/s/admin/giveallteacher',
        data: {
          token: localStorage.getItem('adminToken'),
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).toBeTruthy();
  });

  // test('should render the components correctly with the data passed. ', (done) => {
  //   setTimeout(() => {
  //     const wrapper = shallow(<TeacherList />);
  //     expect(wrapper).toMatchSnapshot();
  //     done();
  //   }, 5000);
  // });
});
