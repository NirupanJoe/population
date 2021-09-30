jest.mock('../core/context', () => ({
	state: {
		location: '',
	},
	actions: {
		setName: jest.fn(),
	},
}));

import { render, fireEvent } from '@testing-library/react';
import context from '../core/context';
import GenInput from './genInput';

// TODO: Use random keys.
const data = {
	name: 'Name',
	type: 'type',
};

test('GenInput render', () => {
	const { getByRole } = render(GenInput(data));
	const component = getByRole('genInput');

	expect(component).toBeInTheDocument();
	expect(getByRole(data.name)).toBeInTheDocument();
	expect(getByRole(data.name)).toHaveTextContent(data.name);
});

test('onChange fireEvent', () => {
	// TODO: Use a better selector, than queryByPlaceholderText.
	const component = render(GenInput(data)).queryByPlaceholderText(data.name);

	// TODO: Use a random string as the value.
	fireEvent.change(component, { target: { value: data.name }});

	expect(component).toBeInTheDocument();
	expect(component).toHaveAttribute('type', data.type);
	// TODO: Test the attribute, value.
	expect(context.actions[`set${ data.name }`]).toHaveBeenCalledWith(data.name);
});
