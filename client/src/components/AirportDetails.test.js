// import React from 'react';
// import AirportDetails from './AirportDetails';
// import Adapter from 'enzyme-adapter-react-16';
// import Card from '@material-ui/core/Card';
// import { shallow, mount, render,configure } from 'enzyme';

// configure({ adapter: new Adapter() });


// function setup() {
//   const props = {
//     airport: {
//         airportCode: "23",
//         airportName: "34",
//         location: {
//           latitude: "34",
//           longitude: "34"
//         },
//         city: {
//           timeZoneName: "34"
//         }
      
//     }
//   };

//   const shallowWrapper = shallow(<AirportDetails {...props} />);
//   return {
//     props,
//     shallowWrapper
//   };
// }


// describe('AirportDetails component', () => {
//   it('should render self and its subcomponents', () => {
//     const {
//       shallowWrapper,
//     } = setup();

//     expect(shallowWrapper.find(<Card />)).toHaveLength(1);
//   });

// });


import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import wait from "waait";

import AirportDetails, { GET_AIRPORT_QUERY } from "./AirportDetails";

it("should render without error", () => {
  renderer.create(
    <MockedProvider mocks={[]}>
      <Currency />
    </MockedProvider>
  );
});

it("should render loading state initially", () => {
  const component = renderer.create(
    <MockedProvider mocks={[]}>
      <AirportDetails />
    </MockedProvider>
  );
  const tree = component.toJSON();
  expect(tree.children).toContain("Loading...");
});

it("should render currency conversions", async () => {
  const currencyMock = {
    request: { query: GET_EXCHANGE_RATES_QUERY },
    result: { data: { rates: [{ currency: "LOL", rate: 999 }] } }
  };

  const component = renderer.create(
    <MockedProvider mocks={[currencyMock]} addTypename={false}>
      <AirportDetails />
    </MockedProvider>
  );

  await wait(0); // wait for response

  const p = component.root.findByType("p");
  expect(p.children).toContain("LOL: 999");
});

it("should show error UI", async () => {
  const currencyMock = {
    request: { query: GET_EXCHANGE_RATES_QUERY },
    error: new Error("aw shucks")
  };

  const component = renderer.create(
    <MockedProvider mocks={[currencyMock]} addTypename={false}>
      <AirportDetails />
    </MockedProvider>
  );

  await wait(0); // wait for response

  const tree = component.toJSON();
  expect(tree.children).toContain("Error :(");
});
