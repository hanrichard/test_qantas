import React from "react";
import { MockedProvider } from '@apollo/react-testing'
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, render,  configure } from 'enzyme';
import { GET_AIRPORT_QUERY, AirportDetails } from './AirportDetails';
import TestRenderer from 'react-test-renderer'; 


configure({ adapter: new Adapter() });

const mocks = [
  {
    request: {
      query: GET_AIRPORT_QUERY
    },
    result: {
      data: {
        dog: { id: '1', name: 'Buck', breed: 'bulldog' },
      },
    },
  },
];

it('should render loading state initially', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={[]}>
      <AirportDetails />
    </MockedProvider>,
  );

  const tree = component.toJSON();
  expect(tree.children).toContain('Loading...');
});
