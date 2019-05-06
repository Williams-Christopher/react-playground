import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';

import Tabs from './Tabs';

describe('Tabs Component', () => {
    const tabsProp = [
        { name: 'First tab',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
        { name: 'Second tab',
          content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { name: 'Third tab',
          content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
      ];

    it('Renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Renders empty given no tabs', () => {
        const wrapper = shallow(<Tabs />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('Renders the first tab by default', () => {
        const wrapper = shallow(<Tabs tabs={tabsProp} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('Closes the first tab and opens any clicked tab', () => {
        const wrapper = shallow(<Tabs tabs={tabsProp} />);
        wrapper.find('button').at(1).simulate('click');
        expect(toJSON(wrapper)).toMatchSnapshot();

    });
});