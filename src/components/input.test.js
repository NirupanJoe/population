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
import Input from './input';

const data = {
	name: 'Name',
	type: 'type',
};

test('Input render', () => {
	const { getByRole } = render(Input(data));
	const component = getByRole('input');

	expect(component).toBeInTheDocument();
	expect(getByRole(data.name)).toBeInTheDocument();
	expect(getByRole(data.name)).toHaveTextContent(data.name);
});

test('onChange fireEvent', () => {
	const component = render(Input(data)).queryByPlaceholderText(data.name);

	fireEvent.change(component, { target: { value: data.name }});

	expect(component).toBeInTheDocument();
	expect(context.actions[`set${ data.name }`]).toHaveBeenCalledWith(data.name);
});
