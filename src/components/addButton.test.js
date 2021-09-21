import { render, fireEvent } from '@testing-library/react';
import context from '../core/context';
import Population from '../services/populationService';
import AddButton from './addButton';

describe('AddButton', () => {
	const expectations = [
		['disable', true],
		['not disable', false],
	];

	test.each(expectations)('AddButton %p when isActive is %p',
		(dummy, isActive) => {
			jest.spyOn(Population, 'isActive').mockReturnValue(isActive);

			const component = render(AddButton()).getByRole('add-button');

			isActive
				? expect(component).toBeDisabled()
				: expect(component).not.toBeDisabled();
			expect(component).toBeInTheDocument();
		});
});

test('fireEvent', () => {
	jest.spyOn(Population, 'isActive').mockReturnValue(false);
	jest.spyOn(context.actions, 'AddPopulation').mockReturnValue();

	const component = render(AddButton()).getByRole('add-button');

	fireEvent.click(component);
	expect(context.actions.AddPopulation).toHaveBeenCalledWith();
});
