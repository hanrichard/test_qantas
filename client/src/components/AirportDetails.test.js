import React from 'react';
import AirportDetails from './AirportDetails';
import Adapter from 'enzyme-adapter-react-16';
import Card from '@material-ui/core/Card';
import { shallow, mount, render,configure } from 'enzyme';

configure({ adapter: new Adapter() });


function setup() {
  const props = {
    airport: {
        airportCode: "23",
        airportName: "34",
        location: {
          latitude: "34",
          longitude: "34"
        },
        city: {
          timeZoneName: "34"
        }
      
    }
  };

  const shallowWrapper = shallow(<AirportDetails {...props} />);
  return {
    props,
    shallowWrapper
  };
}


describe('AirportDetails component', () => {
  it('should render self and its subcomponents', () => {
    const {
      shallowWrapper,
    } = setup();

    expect(shallowWrapper.find(<Card />)).toHaveLength(1);
  });

});
