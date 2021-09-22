/* eslint-disable react/display-name */

jest.mock('./components/location', () => () => <div role="location"/>);
jest.mock('./components/totalPopulation', () => () =>
	<div role="totalPopulation"/>);
jest.mock('./components/addButton', () => () => <div role="add-button"/>);

import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('App renders the screen', () => {
	const { getByRole } = render(<App/>);

	expect(getByRole('App')).toBeInTheDocument();
	expect(getByRole('location')).toBeInTheDocument();
	expect(getByRole('add-button')).toBeInTheDocument();
	expect(getByRole('totalPopulation')).toBeInTheDocument();
	expect(getByRole('App')).toHaveTextContent('Location:TotalPopulation:');
});
