import axios from 'axios';
import context from '../core/context';
import PopulationService from './populationService';

const Remote = {

	fetchPopulation: async () =>
		context.actions.updatePopulation((await axios
			.get(context.config.localhostURL)).data),

	addPopulation: async ({ state }) =>
			// TODO: Move the logic to populationService.
		!PopulationService.isValid(context) && context.actions
			.addPopulation((await axios.post(context.config.localhostURL, {
				location: state.location,
				malePopulation: state.malePopulation,
				femalePopulation: state.femalePopulation,
				totalPopulation: state.totalPopulation,
			})).data),

	removePopulation: async (id) => {
		await axios.delete(`${ context.config.localhostURL }/${ id }`);

		context.actions.removePopulation(id);
	},
};

export default Remote;
