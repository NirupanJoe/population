jest.mock('../core/context', () => ({
	state: {
		totalPopulation: '',
	},
	actions: {
		TotalPopulationInput: jest.fn(),
	},
}));

import { render, fireEvent } from '@testing-library/react';
import context from '../core/context';
import TotalPopulation from './totalPopulation';

test('TotalPopulation render', () => {
	const component = render(TotalPopulation()).getByRole('totalPopulation');

	expect(component).toBeInTheDocument();
});

test('Location fireEvent', () => {
	const component = render(TotalPopulation()).getByRole('totalPopulation');

	fireEvent.change(component, { target: { value: '5' }});

	expect(context.actions.TotalPopulationInput).toHaveBeenCalledWith('5');
});
