import { render, fireEvent } from '@testing-library/react';
import Remote from '../services/remote';
import RemoveButton from './removeButton';

const id = Symbol('id');

test('RemoveButton render', () => {
	const { getByRole } = render(RemoveButton(id));
	const component = getByRole('removePopulation');

	expect(component).toBeInTheDocument();
	expect(component).toHaveClass('attribute remove-population');
	expect(getByRole('removeButton')).toBeInTheDocument();
	expect(getByRole('removeButton')).toHaveClass('remove-button');
});

test('onClick fireEvent', () => {
	jest.spyOn(Remote, 'removePopulation').mockReturnValue();

	const component = render(RemoveButton(id)).getByRole('removeButton');

	fireEvent.click(component);

	expect(Remote.removePopulation).toHaveBeenCalledWith(id);
});
