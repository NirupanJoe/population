/* eslint-disable max-lines-per-function */
import Population from '../services/populationService';
import Actions from './actions';

describe('Actions', () => {
	const {
		LocationInput,
		AddPopulation,
		TotalPopulationInput,
		MalePopulationInput,
		FemalePopulationInput,
		UpdatePopulation,
	} = Actions;
	const returnValue = Symbol('returnValue');

	describe('update input data', () => {
		const data = Symbol('data');
		const expectations = [
			['location', LocationInput],
			['totalPopulation', TotalPopulationInput],
			['malePopulation', MalePopulationInput],
			['femalePopulation', FemalePopulationInput],
			['population', UpdatePopulation],
		];

		test.each(expectations)('%p update data in state', (key, fn) => {
			const result = fn({ data });

			expect(result).toMatchObject({
				[key]: data,
			});
		});
	});

	test('AddPopulation', () => {
		const context = {
			data: Symbol('data'),
		};

		jest.spyOn(Population, 'addPopulation').mockReturnValue(returnValue);

		const result = AddPopulation(context);

		expect(Population.addPopulation)
			.toHaveBeenCalledWith({ ...context, data: [context.data] });
		expect(result).toMatchObject({
			population: returnValue,
			location: '',
			totalPopulation: '',
			malePopulation: '',
			femalePopulation: '',
		});
	});
});
