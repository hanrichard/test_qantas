import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import AirportItem from './AirportItem';
import Adapter from 'enzyme-adapter-react-16';
import Card from '@material-ui/core/Card';
configure({ adapter: new Adapter() });

function setup() {
  const props = {
    airport: {
        airportName: "123",
        country: {
            countryName: "1234"
        },
        airportCode: "123"
      }
  };

  const shallowWrapper = shallow(<AirportItem {...props}/>);

  return {
    props,
    shallowWrapper
  };
}

describe('Airport item component', () => {
  it('should render self and its subcomponents', () => {
    const {
      shallowWrapper
    } = setup();

    expect(shallowWrapper.find(Card)).toHaveLength(1);
    expect(shallowWrapper.find(".AirportList__card")).toHaveLength(1);
    expect(shallowWrapper.find(".AirportList__link")).toHaveLength(1);
    expect(shallowWrapper.find(".AirportList__link-airportName")).toHaveLength(1);
    expect(shallowWrapper.find(".AirportList__link-countryName")).toHaveLength(1);
  });
});
