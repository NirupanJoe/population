/* eslint-disable react/display-name */

jest.mock('./components/location', () => () => <div role="location"/>);
jest.mock('./components/totalPopulation', () => () =>
	<div role="totalPopulation"/>);
jest.mock('./components/malePopulation', () => () =>
	<div role="malePopulation"/>);
jest.mock('./components/femalePopulation', () => () =>
	<div role="femalePopulation"/>);
jest.mock('./components/addButton', () => () => <div role="addButton"/>);
jest.mock('./components/populationTable', () => () =>
	<div role="populationTable"/>);

import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('App renders the screen', () => {
	const { getByRole } = render(<App/>);

	expect(getByRole('App')).toBeInTheDocument();
	expect(getByRole('location')).toBeInTheDocument();
	expect(getByRole('totalPopulation')).toBeInTheDocument();
	expect(getByRole('malePopulation')).toBeInTheDocument();
	expect(getByRole('femalePopulation')).toBeInTheDocument();
	expect(getByRole('addButton')).toBeInTheDocument();
	expect(getByRole('populationTable')).toBeInTheDocument();
	expect(getByRole('App')).toHaveTextContent('Location:TotalPopulation:'
	+ 'MalePopulation:FemalePopulation');
});
