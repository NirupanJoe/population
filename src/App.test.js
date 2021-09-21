/* eslint-disable react/display-name */
jest.mock('./components/screen', () => () => <div role="screen"/>);

import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('App renders the screen', () => {
	const { getByRole } = render(<App/>);

	expect(getByRole('App')).toBeInTheDocument();
	expect(getByRole('screen')).toBeInTheDocument();
});
