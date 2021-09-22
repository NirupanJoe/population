import { rndString } from '@laufire/utils/random';

const Population = {
	addPopulation: ({ state, config }) =>
		[...state.population, {
			id: rndString(config.rndStringLength),
			location: state.location,
			totalPopulation: state.totalPopulation,
		}],

	isActive: ({ state }) => state.totalPopulation === '',
};

export default Population;
