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
		}];

		const result = addPopulation({ state, config });

		expect(random.rndString).toHaveBeenCalledWith(config.idLength);
		expect(result).toEqual(expected);
	});

	describe('isActive', () => {
		const expectations = [
			[false, 'a', 'a'],
			[true, '', ''],
			[true, '', 'a'],
			[true, 'a', ''],
		];

		test.each(expectations)('Return %p', (
			hasActive, location, totalPopulation
		) => {
			const result = isActive({ state: {
				location,
				totalPopulation,
			}});

			expect(result).toEqual(hasActive);
		});
	});
});
