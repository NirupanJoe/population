/* eslint-disable react/display-name */

jest.mock('./location', () => () => <div role="location"/>);

import React from 'react';
import { render } from '@testing-library/react';

import Screen from './screen';

test('Screen renders the location', () => {
	const { getByRole } = render(Screen());

	expect(getByRole('screen')).toBeInTheDocument();
	expect(getByRole('location')).toBeInTheDocument();
	expect(getByRole('screen')).toHaveTextContent('Population:');
});
