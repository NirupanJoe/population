import { render, fireEvent } from '@testing-library/react';
import context from '../core/context';
import Population from '../services/populationService';
import Remote from '../services/remote';
import AddButton from './addButton';

describe('AddButton', () => {
	const expectations = [
		['disable', true],
		['not disable', false],
	];

	test.each(expectations)('AddButton %p when isValid is %p',
		(dummy, isValid) => {
			jest.spyOn(Population, 'isValid').mockReturnValue(isValid);

			const component = render(AddButton()).getByRole('addButton');

			expect(component.closest('button').disabled).toEqual(isValid);
			expect(component).toBeInTheDocument();
		});
});

test('fireEvent', () => {
	jest.spyOn(Population, 'isValid').mockReturnValue(false);
	jest.spyOn(Remote, 'addPopulation').mockReturnValue();

	const component = render(AddButton()).getByRole('addButton');

	fireEvent.click(component);
	expect(Remote.addPopulation).toHaveBeenCalledWith(context);
});
