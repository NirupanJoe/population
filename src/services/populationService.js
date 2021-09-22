import { rndString } from '@laufire/utils/random';

const Population = {
	addPopulation: ({ state, config }) =>
		[...state.population, {
			id: rndString(config.idLength),
			location: state.location,
			totalPopulation: state.totalPopulation,
		}],

	isActive: ({ state }) => state.totalPopulation === '',
};

export default Population;
