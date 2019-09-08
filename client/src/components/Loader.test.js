import React from 'react';
import { shallow, configure } from 'enzyme';
import Loader from './Loader';
import Adapter from 'enzyme-adapter-react-16';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
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

  const shallowWrapper = shallow(<Loader />);

  return {
    props,
    shallowWrapper
  };
}

describe('Photos component', () => {

  it('should render self and its subcomponents', () => {
    const {
      shallowWrapper
    } = setup();

    expect(shallowWrapper.find(CircularProgress)).toHaveLength(1);
  });

});
