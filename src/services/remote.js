import axios from 'axios';
import context from '../core/context';

const Remote = {

	fetchPopulation: async () =>
		context.actions.updatePopulation((await axios
			.get(context.config.localhostURL)).data),

	addPopulation: async ({ state }) => {
		context.actions.resetInput();

		context.actions.addPopulation((await axios
			.post(context.config.localhostURL, {
				location: state.location,
				malePopulation: state.malePopulation,
				femalePopulation: state.femalePopulation,
				totalPopulation: state.totalPopulation,
			})).data);
	},

	removePopulation: async (id) => {
		await axios.delete(`${ context.config.localhostURL }/${ id }`);

		context.actions.removePopulation(id);
	},
};

export default Remote;
