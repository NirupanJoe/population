/* eslint-disable max-statements */
/* eslint-disable react/display-name */

jest.mock('./components/formInput', () => () => <div role="formInput"/>);
jest.mock('./components/addButton', () => () => <div role="addButton"/>);
jest.mock('./components/populationTable', () => () =>
	<div role="populationTable"/>);

import React from 'react';
import { render } from '@testing-library/react';

import App from './App';
import Remote from './services/remote';

test('App renders formInput, addButton, populationTable', () => {
	jest.spyOn(React, 'useEffect');

	const { getByRole } = render(<App/>);

	expect(getByRole('App')).toBeInTheDocument();
	expect(getByRole('formInput')).toBeInTheDocument();
	expect(getByRole('addButton')).toBeInTheDocument();
	expect(getByRole('populationTable')).toBeInTheDocument();
	expect(React.useEffect).toHaveBeenCalledWith(Remote.fetchPopulation, []);
});
