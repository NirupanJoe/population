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
		// TODO: Use randomStrings.
		// TODO: Only two cases are needed, all full and some full.
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

	describe('removePopulation', () => {
		const data = Symbol('data');
		const dataOne = Symbol('dataOne');
		const expectations = [
			['remove', data, []],
			['Does not remove', dataOne, [{ id: dataOne }]],
		];

		test.each(expectations)('%p the given id in populations',
			(
				dummy, id, returnValue
			) => {
			// TODO: Randomize tests.
			// TODO: Test for failure case.
				const populations = [{
					id,
				}];
				const state = {
					populations,
				};

				const result = removePopulation({ state, data });

				expect(result).toEqual(returnValue);
			});
	});
});
