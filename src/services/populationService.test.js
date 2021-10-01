/* eslint-disable max-lines-per-function */
import Population from './populationService';
import { rndString } from '@laufire/utils/random';
import context from '../core/context';
import Remote from './remote';

describe('PopulationService', () => {
	const {
		addPopulation,
		isValid,
		removePopulation,
		createPopulation,
	} = Population;

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
		const input = rndString();
		const expectations = [
			[false, input, input, input, input],
			[true, '', input, '', ''],
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

	describe('createPopulation', () => {
		const expectations = [
			[true, 'return false', false],
			[false, 'call addPopulation', undefined],
		];

		test.each(expectations)('isValid is %p %p', (
			hasValid, dummy, expected
		) => {
			jest.spyOn(Population, 'isValid').mockReturnValue(hasValid);
			jest.spyOn(Remote, 'addPopulation').mockReturnValue();
			const result = createPopulation(context);

			expect(Population.isValid).toHaveBeenCalledWith(context);
			!hasValid && expect(Remote.addPopulation)
				.toHaveBeenCalledWith(context);
			expect(result).toEqual(expected);
		});
	});
});
