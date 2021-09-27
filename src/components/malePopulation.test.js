jest.mock('../core/context', () => ({
	state: {
		malePopulation: '',
	},
	actions: {
		setMalePopulation: jest.fn(),
	},
}));

import { render, fireEvent } from '@testing-library/react';
import context from '../core/context';
import MalePopulation from './malePopulation';

test('MalePopulation render', () => {
	const component = render(MalePopulation()).getByRole('malePopulation');

	expect(component).toBeInTheDocument();
});

test('onchange fireEvent', () => {
	const component = render(MalePopulation()).getByRole('malePopulation');

	fireEvent.change(component, { target: { value: '3' }});

	expect(context.actions.setMalePopulation).toHaveBeenCalledWith('3');
});
