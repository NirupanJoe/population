/* eslint-disable max-lines-per-function */
import context from '../core/context';
import Population from './populationService';
import * as random from '@laufire/utils/random';

describe('PopulationService', () => {
	const { addPopulation, isActive } = Population;
	const { config } = context;
	const returnValue = Symbol('returnValue');

	test('AddPopulation return concat list', () => {
		jest.spyOn(random, 'rndString').mockReturnValue(returnValue);

		const state = {
			...context.seed,
			location: 'add',
		};
		const expected = [...state.population, {
			id: returnValue,
			location: state.location,
			totalPopulation: state.totalPopulation,
			malePopulation: state.malePopulation,
		}];

		const result = addPopulation({ state, config });

		expect(random.rndString).toHaveBeenCalledWith(config.idLength);
		expect(result).toEqual(expected);
	});

	describe('isActive', () => {
		const expectations = [
			[false, 'a', 'a', '5'],
			[true, '', '', ''],
			[true, '', 'a', ''],
			[true, 'a', '', '5'],
		];

		test.each(expectations)('Return %p', (
			hasActive, location, totalPopulation, malePopulation
		) => {
			const result = isActive({ state: {
				location,
				totalPopulation,
				malePopulation,
			}});

			expect(result).toEqual(hasActive);
		});
	});
});
