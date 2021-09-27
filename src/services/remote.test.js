/* eslint-disable max-lines-per-function */
import axios from '.pnpm/axios@0.21.4/node_modules/axios';
import context from '../core/context';
import Population from './populationService';
import Remote from './remote';

describe('Remote', () => {
	const {
		fetchPopulation,
		addPopulation,
		removePopulation,
	} = Remote;
	const data = Symbol('data');
	const result = { data };

	test('fetchPopulation', async () => {
		jest.spyOn(axios, 'get').mockReturnValue(result);
		jest.spyOn(context.actions, 'UpdatePopulation');

		await fetchPopulation();

		expect(axios.get)
			.toHaveBeenCalledWith(context.config.localhostURL);
		expect(context.actions.UpdatePopulation)
			.toHaveBeenCalledWith(result.data);
	});

	describe('addPopulation', () => {
		const expectations = [
			['not add', true],
			['add', false],
		];
		const { config } = context;

		test.each(expectations)('%p the population when isActive return %p',
			async (dummy, isActive) => {
				const state = {
					location: Symbol(''),
					totalPopulation: Symbol(''),
					malePopulation: Symbol(''),
					femalePopulation: Symbol(''),
				};

				jest.spyOn(Population, 'isActive').mockReturnValue(isActive);
				!isActive && jest.spyOn(axios, 'post').mockReturnValue(result);
				jest.spyOn(context.actions, 'AddPopulation').mockReturnValue();

				await addPopulation({ state });

				expect(Population.isActive).toHaveBeenCalledWith(context);
				!isActive && expect(axios.post)
					.toHaveBeenCalledWith(config.localhostURL, { ...state })
					&& expect(context.actions.AddPopulation)
						.toHaveBeenCalledWith(result.data);
			});
	});

	test('removePopulation', async () => {
		const id = 'id';

		jest.spyOn(axios, 'delete').mockReturnValue();
		jest.spyOn(context.actions, 'RemovePopulation').mockReturnValue();

		await removePopulation(id);

		expect(axios.delete)
			.toHaveBeenCalledWith(`${ context.config.localhostURL }/${ id }`);
		expect(context.actions.RemovePopulation)
			.toHaveBeenCalledWith(id);
	});
});
