/* eslint-disable max-lines-per-function */
import Population from '../services/populationService';
import Actions from './actions';
import context from './context';

describe('Actions', () => {
	const {
		setLocation,
		addPopulation,
		setTotalPopulation,
		setMalePopulation,
		setFemalePopulation,
		updatePopulation,
		removePopulation,
		resetInput,
	} = Actions;
	const returnValue = Symbol('returnValue');
	const data = Symbol('data');

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
	describe('addPopulation and removePopulation', () => {
		const expectations = [
			['addPopulation', addPopulation],
			['removePopulation', removePopulation],
		];

		test.each(expectations)('%p', (service, fn) => {
			jest.spyOn(Population, service).mockReturnValue(returnValue);

			const result = fn(context);

			expect(Population[service])
				.toHaveBeenCalledWith(context);
			expect(result).toMatchObject({
				populations: returnValue,
			});
		});
	});

	test('resetInput', () => {
		const result = resetInput();

		expect(result).toMatchObject({
			location: '',
			totalPopulation: '',
			malePopulation: '',
			femalePopulation: '',
		});
	});
});
