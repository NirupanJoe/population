/* eslint-disable max-lines-per-function */
jest.mock('../core/context', () => ({
	state: {
		location: '',
		malePopulation: '',
		femalePopulation: '',
		totalPopulation: '',
	},
	actions: {
		setLocation: jest.fn(),
		setMalePopulation: jest.fn(),
		setFemalePopulation: jest.fn(),
		setTotalPopulation: jest.fn(),
	},
}));

import { render, fireEvent } from '@testing-library/react';
import context from '../core/context';
import genInput from './genInput';
import { rndBetween, rndString } from '@laufire/utils/random';
import config from '../core/config';
import { values } from '@laufire/utils/collection';

describe('GenInput', () => {
	const expectations = values(config.inputs).map((input) => [input]);

	test.each(expectations)('GenInput render %p', (data) => {
		const { getByRole } = render(genInput(data)(context));
		const component = getByRole('genInput');

		expect(component).toBeInTheDocument();
		expect(getByRole(data.label)).toBeInTheDocument();
		expect(getByRole(data.label)).toHaveTextContent(data.label);
	});

	test.each(expectations)('onChange fireEvent for %p', (data) => {
		const value = {
			text: rndString(),
			number: String(rndBetween()),

		};
		const updateName = data.label[0].toLowerCase() + data.label.slice(1);
		const component = render(genInput(data)(context)).getByRole(`${ data.label }Input`);

		fireEvent.change(component, { target: { value: value[data.type] }});

		expect(component).toBeInTheDocument();
		expect(component).toHaveAttribute('type', data.type);
		expect(component).toHaveAttribute('value', context.state[updateName]);
		expect(context.actions[`set${ data.label }`]).toHaveBeenCalledWith(value[data.type]);
	});
});
