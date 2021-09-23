jest.mock('../core/context', () => ({
	state: {
		femalePopulation: '',
	},
	actions: {
		FemalePopulationInput: jest.fn(),
	},
}));

import { render, fireEvent } from '@testing-library/react';
import context from '../core/context';
import FemalePopulation from './femalePopulation';

test('FemalePopulation render', () => {
	const component = render(FemalePopulation()).getByRole('femalePopulation');

	expect(component).toBeInTheDocument();
});

test('onchange fireEvent', () => {
	const component = render(FemalePopulation()).getByRole('femalePopulation');

	fireEvent.change(component, { target: { value: '3' }});

	expect(context.actions.FemalePopulationInput).toHaveBeenCalledWith('3');
});
