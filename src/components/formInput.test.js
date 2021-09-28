import { React } from 'react';
import { render } from '@testing-library/react';
import FormInput from './formInput';
import * as Container from './container';
import context from '../core/context';
import Input from './input';

test('formInput render ', () => {
	jest.spyOn(Container, 'default').mockReturnValue(<div role="input"/>);

	const { getByRole } = render(FormInput());
	const component = getByRole('formInput');

	expect(component).toBeInTheDocument();
	expect(getByRole('input')).toBeInTheDocument();
	expect(Container.default).toBeCalledWith(context.config.input, Input);
	expect(component).toHaveClass('form-input');
});
