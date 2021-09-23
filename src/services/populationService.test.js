/* eslint-disable max-lines-per-function */
import Population from './populationService';

describe('PopulationService', () => {
	const { addPopulation, isActive } = Population;

	test('AddPopulation return concat list', () => {
		const state = {
			population: [Symbol('population')],
		};
		const data = [Symbol('data')];
		const expected = [...state.population, ...data];

		const result = addPopulation({ state, data });

		expect(result).toEqual(expected);
	});

	describe('isActive', () => {
		const expectations = [
			[false, 'a', 'a', '5', '3'],
			[true, '', '', '', ''],
			[true, '', 'a', '', '3'],
			[true, 'a', '', '5', ''],
		];

		test.each(expectations)('Return %p', (
			hasActive, location, totalPopulation, malePopulation,
			femalePopulation
		) => {
			const result = isActive({ state: {
				location,
				totalPopulation,
				malePopulation,
				femalePopulation,
			}});

			expect(result).toEqual(hasActive);
		});
	});
});
