/* eslint-disable max-lines-per-function */
import Population from '../services/populationService';
import Actions from './actions';
import context from './context';

describe('Actions', () => {
	const { LocationInput, AddPopulation, TotalPopulationInput,
		MalePopulationInput } = Actions;
	const returnValue = Symbol('returnValue');

	describe('update input data', () => {
		const data = Symbol('data');
		const expectations = [
			['location', LocationInput],
			['totalPopulation', TotalPopulationInput],
			['malePopulation', MalePopulationInput],
		];

		test.each(expectations)('%p update data in state', (key, fn) => {
			const result = fn({ data });

			expect(result).toMatchObject({
				[key]: data,
			});
		});
	});

	test('AddPopulation', () => {
		jest.spyOn(Population, 'addPopulation').mockReturnValue(returnValue);

		const result = AddPopulation(context);

		expect(result).toMatchObject({
			population: returnValue,
			location: '',
			totalPopulation: '',
			malePopulation: '',
		});
	});
});
