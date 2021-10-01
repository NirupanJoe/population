import Remote from './remote';

const Population = {
	addPopulation: ({ state, data }) => state.populations.concat(data),

	isValid: ({ state }) => [
		state.location,
		state.totalPopulation,
		state.malePopulation,
		state.femalePopulation,
	].includes(''),

	removePopulation: ({ state, data }) =>
		state.populations.filter((population) => population.id !== data),

	createPopulation: (context) =>
		!Population.isValid(context) && Remote.addPopulation(context),
};

export default Population;
