# Qantas test 

## Description
Qantas customers have the ability to view which airports Qantas currently operates from. and it also can  load the list of airports from an API and present them to users


## What's in the project
Server serves data from API call<br>
Client provides the front-end to view datas


## Tech stacks
GraphQL, react, scss


## HOW-TO run: 
### to start a server
Go to server folder, you can run:
#### `npm install`
To install all needed node modules
#### `npm start`
Runs the server<br>
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view it in the browser, 
and run your query or mutation


### to start the page
Go to client folder, and run: 
#### `npm install`
To install all needed node modules
#### `npm start`
Runs the app<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## HOW-TO test:
### `npm test`
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


import React from 'react';
import renderer from 'react-test-renderer';
import { isValid } from 'shortid';
import { mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

import FieldWrapper from './FieldWrapper';
import Input from '../Input/Input';
import ToggleGroup from '../ToggleGroup/ToggleGroup';
import Textarea from '../Textarea/Textarea';

const testProps = {
	id: 'test',
	children: <Input />,
};

describe('FieldWrapper', () => {
	it('renders', () => {
		const tree = renderer.create(<FieldWrapper {...testProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('passes through unnamed props', () => {
		const tree = renderer
			.create(<FieldWrapper {...testProps} data-test="test" />)
			.toJSON();
		expect(tree.props['data-test']).toBe('test');
	});

	describe('has a label', () => {
		it('renders a label', () => {
			const tree = renderer
				.create(<FieldWrapper {...testProps} label="test" />)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('does not render an empty label', () => {
			const tree = renderer
				.create(<FieldWrapper {...testProps} label="" />)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('renders label props if supplied', () => {
			const label = renderer
				.create(
					<FieldWrapper
						{...testProps}
						label="test"
						labelProps={{ 'data-test': 'test', id: 'label-id' }}
					/>
				)
				.root.findByType('label');
			expect(label.props['data-test']).toBe('test');
			expect(label.props['id']).toBe('label-id');
		});
	});

	describe('renders help text', () => {
		it('renders help text if supplied', () => {
			const tree = renderer
				.create(<FieldWrapper {...testProps} help="test" />)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('renders help props if supplied', () => {
			const tree = renderer.create(
				<FieldWrapper
					{...testProps}
					help="test"
					helpProps={{ id: 'help-id', 'data-test': 'test' }}
				/>
			);

			const help = tree.root.findByProps({ id: 'help-id' });

			expect(help.props['data-test']).toBe('test');
		});
	});

	describe('renders an error', () => {
		it('renders error text if supplied and isInvalid is true', () => {
			const noError = renderer
				.create(<FieldWrapper {...testProps} error="error" help="help" />)
				.toJSON();
			const error = renderer
				.create(
					<FieldWrapper {...testProps} error="error" help="help" isInvalid />
				)
				.toJSON();
			expect(noError).toMatchSnapshot();
			expect(error).toMatchSnapshot();
		});

		it('renders error props if supplied', () => {
			const tree = renderer.create(
				<FieldWrapper
					{...testProps}
					error="test"
					isInvalid
					errorProps={{ 'data-test': 'test', id: 'error-id' }}
				/>
			);

			const error = tree.root.findByProps({ id: 'error-id' });

			expect(error.props['data-test']).toBe('test');
		});
	});

	describe('can be disabled', () => {
		it('renders with a disabled state', () => {
			const tree = renderer
				.create(<FieldWrapper disabled {...testProps} />)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('passes down the disabled prop to its child input component', () => {
			const input = renderer
				.create(<FieldWrapper disabled {...testProps} />)
				.root.findByType(Input);
			expect(input.props.disabled).toBe(true);
		});
	});

	describe('can be invalid', () => {
		it('renders with an invalid state', () => {
			const tree = renderer
				.create(<FieldWrapper isInvalid {...testProps} />)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('passes down the isInvalid prop to its child input component', () => {
			const input = renderer
				.create(<FieldWrapper isInvalid {...testProps} />)
				.root.findByType(Input);
			expect(input.props.isInvalid).toBe(true);
		});
	});

	it('adds a generated id if not supplied by the user', () => {
		const { id, ...restProps } = testProps;
		const tree = renderer.create(<FieldWrapper {...restProps} />).toJSON();
		expect(isValid(tree.props.id)).toBe(true);
	});

	it('adds an additional id to the child component aria-describedby if supplied', () => {
		const tree = renderer
			.create(
				<FieldWrapper aria-describedby="aria-id" {...testProps}>
					<Input />
				</FieldWrapper>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('adds props to its child component if "isFormField" or "isGroupedFormField" static is true', () => {
		const ExampleThirdParty = props => <input {...props} />;
		ExampleThirdParty.isFormField = true;

		const ExampleThirdPartyGrouped = props => <div {...props} />;
		ExampleThirdPartyGrouped.isGroupedFormField = true;

		[
			Input,
			Textarea,
			ToggleGroup,
			ExampleThirdParty,
			ExampleThirdPartyGrouped,
		].forEach(Element => {
			const tree = renderer.create(
				<FieldWrapper
					error="error"
					help="help"
					id="test"
					isInvalid
					label="label"
				>
					<Element name="test" onChange={() => {}} />
				</FieldWrapper>
			);

			const input = tree.root.findByType(Element);
			expect(input.props.ariaDescribedby).toBe('error-test help-test');
			expect(input.props.ariaLabelledby).toBe('label-test');
		});
	});

	it('pass ref to access dom node', () => {
		const ref = React.createRef();
		mount(
			<div>
				<FieldWrapper
					error="error"
					help="help"
					id="test"
					isInvalid
					label="label"
					ref={ref}
				>
					<Input onChange={() => {}} />
				</FieldWrapper>
			</div>
		);

		expect(ReactTestUtils.isDOMComponent(ref.current)).toBeTruthy();
		expect(ref.current.tagName).toEqual('DIV');
	});
});


import { mount, shallow } from 'enzyme';
import AEMContent from '../AEMContent/AEMContent';
import TestRenderer from 'react-test-renderer';
import React from 'react';

describe('AEMContent', () => {
	beforeEach(() => {
		fetch.resetMocks();
	});

	it('should pass the redirectTo404OnError props', () => {
		const responseContent = '<p id="aem-content-id">yay</p>';
		fetch.mockResponse(responseContent);
		const tree = mount(<AEMContent redirectTo404OnError path="" />);
		expect(tree.props()['redirectTo404OnError']).toBe(true);
	});

	it('should pass the loadingMessage prop', () => {
		const responseContent = '<p id="aem-content-id">yay</p>';
		fetch.mockResponse(responseContent);
		const tree = TestRenderer.create(
			<AEMContent
				isLoading
				loadingMessage={() => <div>loading...</div>}
				path=""
			/>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render a vanilla div if noStyle is passed', async () => {
		const responseContent = 'content';
		fetch.mockResponse(responseContent);
		const wrapper = shallow(<AEMContent path="" noStyle />);
		await wrapper.instance().componentDidMount();
		// eslint-disable-next-line
		expect(wrapper.html()).toBe('<div>content</div>');
	});

	it('should not redirect to 404 page', async () => {
		const responseContent = '<p id="aem-content-id">yay</p>';
		fetch.mockResponse(responseContent);
		Object.defineProperty(window.location, 'replace', {});
		window.location.replace = jest.fn();
		const wrapper = shallow(<AEMContent path="" redirectTo404OnError />);
		await wrapper.instance().componentDidMount();
		expect(window.location.replace).not.toHaveBeenCalled();
	});

	it('should render content asynchronously', async () => {
		const responseContent = '<p id="aem-content-id">yay</p>';
		fetch.mockResponse(responseContent);
		const errorHandlerSpy = jest.fn();
		const wrapper = shallow(<AEMContent path="" onError={errorHandlerSpy} />);
		await wrapper.instance().componentDidMount();
		wrapper.update();
		expect(wrapper.html()).toContain(responseContent);
	});

	describe('handles error events', () => {
		it('should call onError callback', async () => {
			fetch.mockReject(new Error('fake error message'));

			const errorHandlerSpy = jest.fn();
			const wrapper = shallow(<AEMContent path="" onError={errorHandlerSpy} />);
			await wrapper.instance().componentDidMount();
			expect(errorHandlerSpy).toHaveBeenCalled();
		});
		it('should not render anything', async () => {
			fetch.mockReject(new Error('fake error message'));
			const wrapper = shallow(<AEMContent path="" />);
			await wrapper.instance().componentDidMount();
			expect(wrapper.html()).toMatchSnapshot();
		});
		it('should renders a errorMessage prop text when given', async () => {
			fetch.mockReject(new Error('fake error message'));
			const wrapper = shallow(
				<AEMContent path="" errorMessage="Error retrieving content" />
			);
			await wrapper.instance().componentDidMount();
			expect(wrapper.html()).toContain('Error retrieving content');
		});
		it('should prioritize the errorMessage over the loadingMessage', async () => {
			fetch.mockReject(new Error('fake error message'));
			const wrapper = shallow(
				<AEMContent
					isLoading
					errorMessage="<div>error!!!</div>"
					loadingMessage="<div>loading...</div>"
					path=""
				/>
			);
			await wrapper.instance().componentDidMount();
			expect(wrapper.html()).toMatchSnapshot();
		});

		describe('handles redirectTo404OnError', () => {
			it('should redirect on error', async () => {
				Object.defineProperty(window.location, 'replace', {});
				window.location.replace = jest.fn();
				fetch.mockReject(new Error('fake error message'));
				const wrapper = shallow(<AEMContent path="" redirectTo404OnError />);
				await wrapper.instance().componentDidMount();
				expect(window.location.replace).toHaveBeenCalled();
			});
		});
	});
});

