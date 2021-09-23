import axios from 'axios';
import context from '../core/context';

const Remote = {
	fetchPopulation: async () => {
		const result = await axios.get(context.config.localhostURL);

		context.actions.UpdatePopulation(result.data);
	},
};

export default Remote;
