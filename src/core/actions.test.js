import Population from '../services/populationService';
import Actions from './actions';
import context from './context';

describe('Actions', () => {
	const { LocationInput, AddPopulation } = Actions;
	const data = Symbol('data');
	const returnValue = Symbol('returnValue');

	test('LocationInput', () => {
		const result = LocationInput({ data });

		expect(result).toMatchObject({
			location: data,
		});
	});

	test('AddPopulation', () => {
		jest.spyOn(Population, 'addPopulation').mockReturnValue(returnValue);

		const result = AddPopulation(context);

		expect(result).toMatchObject({
			population: returnValue,
			location: '',
		});
	});
});
