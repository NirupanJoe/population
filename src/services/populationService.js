import { rndString } from '@laufire/utils/random';

const Population = {
	addPopulation: ({ state, config }) =>
		[...state.population, {
			id: rndString(config.idLength),
			location: state.location,
			totalPopulation: state.totalPopulation,
			malePopulation: state.malePopulation,
			femalePopulation: state.femalePopulation,
		}],

	isActive: ({ state }) =>
		state.location === ''
		|| state.totalPopulation === ''
		|| state.malePopulation === ''
		|| state.femalePopulation === '',
};

export default Population;
