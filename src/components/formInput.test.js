import { React } from 'react';
import { render } from '@testing-library/react';
import FormInput from './formInput';
import * as Container from './container';
import context from '../core/context';
import GenInput from './genInput';

test('formInput render ', () => {
	jest.spyOn(Container, 'default').mockReturnValue(<div role="genInput"/>);

	const { getByRole } = render(FormInput());
	const component = getByRole('formInput');

	expect(component).toBeInTheDocument();
	// TODO: Mock getInput.
	expect(getByRole('genInput')).toBeInTheDocument();
	expect(Container.default).toBeCalledWith(context.config.genInput, GenInput);
	expect(component).toHaveClass('form-input');
});
