/* eslint-disable max-lines-per-function */
import Population from '../services/populationService';
import Actions from './actions';

describe('Actions', () => {
	const {
		setLocation,
		addPopulation,
		setTotalPopulation,
		setMalePopulation,
		setFemalePopulation,
		updatePopulation,
		removePopulation,
	} = Actions;
	const returnValue = Symbol('returnValue');
	const data = Symbol('data');
	const context = {
		data,
	};

	describe('update input data', () => {
		const expectations = [
			['location', setLocation],
			['totalPopulation', setTotalPopulation],
			['malePopulation', setMalePopulation],
			['femalePopulation', setFemalePopulation],
			['populations', updatePopulation],
		];

		test.each(expectations)('%p update data in state', (key, fn) => {
			const result = fn({ data });

			expect(result).toMatchObject({
				[key]: data,
			});
		});
	});

	test('addPopulation', () => {
		jest.spyOn(Population, 'addPopulation').mockReturnValue(returnValue);

		const result = addPopulation(context);

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

	test('removePopulation', () => {
		jest.spyOn(Population, 'removePopulation').mockReturnValue(returnValue);

		const result = removePopulation(context);

		expect(result).toMatchObject({
			populations: returnValue,
		});
	});
});
