import React from "react";
import { MockedProvider } from '@apollo/react-testing'
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, render,  configure } from 'enzyme';
import Home, { GET_AIRPORTS_QUERY } from './Home';
import TestRenderer from 'react-test-renderer'; 
import Loader from "./Loader";


configure({ adapter: new Adapter() });

const mocks = [
  {
    request: {
      query: GET_AIRPORTS_QUERY
    },
    result: {
      data: {
        airports: { 
          airportCode: "AAA", 
          airportName: "Anaa", 
          location: {
            latitude: "17.25",
            longitude: "145.3"
          },
          city: {
            timeZoneName: "Pacific/Tahiti"
          },
          country: {
            countryName: "French Polynesia"
          }
         },
      },
    },
  },
];

it('renders without error', () => {
  TestRenderer.create(
    <MockedProvider mocks={mocks} >
      <Home  />
    </MockedProvider>,
  );
});

