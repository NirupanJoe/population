jest.mock('../core/context', () => ({
	state: {
		location: '',
	},
	actions: {
		setLocation: jest.fn(),
	},
}));

import { render, fireEvent } from '@testing-library/react';
import context from '../core/context';
import Location from './location';

describe('Location', () => {
	test('Location render', () => {
		const component = render(Location()).getByRole('location');

		expect(component).toBeInTheDocument();
	});

	test('Location fireEvent', () => {
		const component = render(Location()).getByRole('location');

		fireEvent.change(component, { target: { value: 'city' }});

		expect(context.actions.setLocation).toHaveBeenCalledWith('city');
	});
});
