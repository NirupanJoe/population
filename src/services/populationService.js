import { rndString } from '@laufire/utils/random';

const Population = {
	addPopulation: ({ state, config }) =>
		[...state.population, {
			id: rndString(config.idLength),
			location: state.location,
			totalPopulation: state.totalPopulation,
			malePopulation: state.malePopulation,
		}],

	isActive: ({ state }) =>
		state.location === ''
		|| state.totalPopulation === ''
		|| state.malePopulation === '',
};

export default Population;
