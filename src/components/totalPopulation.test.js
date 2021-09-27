jest.mock('../core/context', () => ({
	state: {
		totalPopulation: '',
	},
	actions: {
		setTotalPopulation: jest.fn(),
	},
}));

import { render, fireEvent } from '@testing-library/react';
import context from '../core/context';
import TotalPopulation from './totalPopulation';

test('TotalPopulation render', () => {
	const component = render(TotalPopulation()).getByRole('totalPopulation');

	expect(component).toBeInTheDocument();
});

test('onchange fireEvent', () => {
	const component = render(TotalPopulation()).getByRole('totalPopulation');

	fireEvent.change(component, { target: { value: '5' }});

	expect(context.actions.setTotalPopulation).toHaveBeenCalledWith('5');
});
