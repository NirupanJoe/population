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
};

export default Population;
