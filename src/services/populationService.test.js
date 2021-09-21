/* eslint-disable max-lines-per-function */
import context from '../core/context';
import Population from './populationService';

describe('PopulationService', () => {
	const { addPopulation, isActive } = Population;

	test('AddPopulation return concat list', () => {
		const state = {
			...context.seed,
			location: 'add',
		};
		const expected = [...state.population, {
			location: state.location,
		}];

		const result = addPopulation({ state });

		expect(result).toEqual(expected);
	});

	describe('isActive', () => {
		const expectations = [
			[false, 'a'],
			[true, ''],
		];

		test.each(expectations)('Return %p', (hasActive, string) => {
			const result = isActive({ state: { location: string }});

			expect(result).toEqual(hasActive);
		});
	});
});
