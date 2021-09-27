import axios from 'axios';
import context from '../core/context';
import PopulationService from './populationService';

const Remote = {

	fetchPopulation: async () =>
		context.actions.updatePopulation((await axios
			.get(context.config.localhostURL)).data),

	// rename isActive
	addPopulation: async ({ state }) =>
		!PopulationService.isActive(context) && context.actions
			.addPopulation((await axios.post(context.config.localhostURL, {
				...state,
			})).data),

	removePopulation: async (id) => {
		await axios.delete(`${ context.config.localhostURL }/${ id }`);

		context.actions.removePopulation(id);
	},
};

export default Remote;
