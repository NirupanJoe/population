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
		RemovePopulation,
	} = Actions;
	const returnValue = Symbol('returnValue');
	const data = Symbol('data');
	const context = {
		data,
	};

	describe('update input data', () => {
		const expectations = [
			['location', LocationInput],
			['totalPopulation', TotalPopulationInput],
			['malePopulation', MalePopulationInput],
			['femalePopulation', FemalePopulationInput],
			['populations', UpdatePopulation],
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

		expect(Population.addPopulation)
			.toHaveBeenCalledWith({ ...context, data: [context.data] });
		expect(result).toMatchObject({
			populations: returnValue,
			location: '',
			totalPopulation: '',
			malePopulation: '',
			femalePopulation: '',
		});
	});

	test('RemovePopulation', () => {
		jest.spyOn(Population, 'removePopulation').mockReturnValue(returnValue);

		const result = RemovePopulation(context);

		expect(result).toMatchObject({
			populations: returnValue,
		});
	});
});
