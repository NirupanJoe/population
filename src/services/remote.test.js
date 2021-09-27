/* eslint-disable max-lines-per-function */
import axios from '.pnpm/axios@0.21.4/node_modules/axios';
import context from '../core/context';
import Population from './populationService';
import Remote from './remote';

describe('Remote', () => {
	const { config } = context;
	const {
		fetchPopulation,
		addPopulation,
		removePopulation,
	} = Remote;
	const data = Symbol('data');
	const returnValue = { data };

	test('fetchPopulation', async () => {
		jest.spyOn(axios, 'get').mockReturnValue(returnValue);
		jest.spyOn(context.actions, 'updatePopulation').mockReturnValue();

		await fetchPopulation();

		expect(axios.get).toHaveBeenCalledWith(config.localhostURL);
		expect(context.actions.updatePopulation)
			.toHaveBeenCalledWith(returnValue.data);
	});

	describe('addPopulation', () => {
		const expectations = [
			['not add', true],
			['add', false],
		];
		const state = {
			location: Symbol(''),
			totalPopulation: Symbol(''),
			malePopulation: Symbol(''),
			femalePopulation: Symbol(''),
		};

		test.each(expectations)('%p the population when isValid return %p',
			async (dummy, isValid) => {
				jest.spyOn(Population, 'isValid').mockReturnValue(isValid);
				jest.spyOn(axios, 'post').mockReturnValue(returnValue);
				jest.spyOn(context.actions, 'addPopulation').mockReturnValue();

				await addPopulation({ state });

				expect(Population.isValid).toHaveBeenCalledWith(context);
				!isValid && expect(axios.post)
					.toHaveBeenCalledWith(config.localhostURL, { ...state })
					&& expect(context.actions.addPopulation)
						.toHaveBeenCalledWith(returnValue.data);
			});
	});

	test('removePopulation', async () => {
		const id = 'id';

		jest.spyOn(axios, 'delete').mockReturnValue();
		jest.spyOn(context.actions, 'removePopulation').mockReturnValue();

		await removePopulation(id);

		expect(axios.delete)
			.toHaveBeenCalledWith(`${ context.config.localhostURL }/${ id }`);
		expect(context.actions.removePopulation)
			.toHaveBeenCalledWith(id);
	});
});
