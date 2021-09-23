import axios from '.pnpm/axios@0.21.4/node_modules/axios';
import context from '../core/context';
import Remote from './remote';

describe('Remote', () => {
	const {
		fetchPopulation,
	} = Remote;
	const data = Symbol('data');
	const result = { data };

	test('fetchPopulation', async () => {
		jest.spyOn(axios, 'get').mockReturnValue(result);
		jest.spyOn(context.actions, 'UpdatePopulation');

		await fetchPopulation();

		expect(axios.get)
			.toHaveBeenCalledWith('http://localhost:5500/population');
		expect(context.actions.UpdatePopulation)
			.toHaveBeenCalledWith(result.data);
	});
});
