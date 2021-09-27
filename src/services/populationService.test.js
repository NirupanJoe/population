/* eslint-disable max-lines-per-function */
import Population from './populationService';

describe('PopulationService', () => {
	const { addPopulation, isValid, removePopulation } = Population;

	test('addPopulation return concat list', () => {
		const data = [Symbol('data')];
		const state = {
			populations: [Symbol('populations')],
		};
		const expected = [...state.populations, ...data];

		const result = addPopulation({ state, data });

		expect(result).toEqual(expected);
	});

	describe('isValid', () => {
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
			const result = isValid({ state: {
				location,
				totalPopulation,
				malePopulation,
				femalePopulation,
			}});

			expect(result).toEqual(hasActive);
		});
	});

	test('removePopulation remove the given id in populations', () => {
		const data = Symbol('data');
		const state = {
			populations: [{
				id: data,
			}],
		};

		const result = removePopulation({ state, data });

		expect(result).toEqual([]);
	});
});
