/* eslint-disable react/display-name */

jest.mock('./genInput', () => (data) =>
	jest.fn().mockReturnValue(<div key={ data.label } role={ `${ data.label }Input` }/>));

import { React } from 'react';
import { render } from '@testing-library/react';
import FormInput from './formInput';
import context from '../core/context';
import * as collection from '@laufire/utils/collection';

// TODO To check toHaveBeenCalledWith for jest.mock
test('formInput render ', () => {
	const { getByRole } = render(FormInput());
	const component = getByRole('formInput');

	collection.map(context.config.inputs, (data) => {
		expect(getByRole(`${ data.label }Input`)).toBeInTheDocument();
	});

	expect(component).toBeInTheDocument();
	expect(component).toHaveClass('form-input');
});
