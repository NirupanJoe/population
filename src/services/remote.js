import axios from 'axios';
import context from '../core/context';
import PopulationService from './populationService';

const Remote = {
	// oneLine
	fetchPopulation: async () => {
		const result = await axios.get(context.config.localhostURL);

		context.actions.updatePopulation(result.data);
	},

	// oneLine
	addPopulation: async ({ state }) => {
		const {
			location,
			totalPopulation,
			malePopulation,
			femalePopulation,
		} = state;
		const result = !PopulationService.isActive(context)
			&& await axios.post(context.config.localhostURL, {
				location,
				totalPopulation,
				malePopulation,
				femalePopulation,
			});

		result && context.actions.addPopulation(result.data);
	},

	removePopulation: async (id) => {
		await axios.delete(`${ context.config.localhostURL }/${ id }`);

		context.actions.removePopulation(id);
	},
};

export default Remote;
