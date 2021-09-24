import { render, fireEvent } from '@testing-library/react';
import Remote from '../services/remote';
import RemoveButton from './removeButton';

const id = Symbol('id');

test('RemoveButton render', () => {
	const component = render(RemoveButton(id)).getByRole('removeButton');

	expect(component).toBeInTheDocument();
});

test('onClick fireEvent', () => {
	jest.spyOn(Remote, 'removePopulation').mockReturnValue();

	const component = render(RemoveButton(id)).getByRole('removeButton');

	fireEvent.click(component);

	expect(Remote.removePopulation).toHaveBeenCalledWith(id);
});
