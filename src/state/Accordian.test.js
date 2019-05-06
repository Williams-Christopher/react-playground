import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';

import Accordian from './Accordian';

describe('Accordian Component Tests', () => {
    const sections = [
        {
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            title: 'Section 2',
            content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
            title: 'Section 3',
            content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
    ]
      
    it('Renders without an error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordian />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Initially renders with all sections closed', () => {
        const wrapper = shallow(<Accordian sections={sections}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('Renders only the section whose button was clicked', () => {
        const wrapper = shallow(<Accordian sections={sections} />);
        wrapper.find('button').at(0).simulate('click');
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('Closes a previously open section when a different section button is clicked', () => {
        const wrapper = shallow(<Accordian sections={sections} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
