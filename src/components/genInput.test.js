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
	const component = render(GenInput(data)).queryByPlaceholderText(data.name);

	fireEvent.change(component, { target: { value: data.name }});

	expect(component).toBeInTheDocument();
	expect(context.actions[`set${ data.name }`]).toHaveBeenCalledWith(data.name);
});
