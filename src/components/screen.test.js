/* eslint-disable react/display-name */

jest.mock('./location', () => () => <div role="location"/>);
jest.mock('./addButton', () => () => <div role="add-button"/>);
jest.mock('./totalPopulation', () => () => <div role="totalPopulation"/>);

import React from 'react';
import { render } from '@testing-library/react';

import Screen from './screen';

test('Screen renders the location', () => {
	const { getByRole } = render(Screen());

	expect(getByRole('screen')).toBeInTheDocument();
	expect(getByRole('location')).toBeInTheDocument();
	expect(getByRole('add-button')).toBeInTheDocument();
	expect(getByRole('totalPopulation')).toBeInTheDocument();
	expect(getByRole('screen'))
		.toHaveTextContent('Population:TotalPopulation:');
});
