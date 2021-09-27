const Population = {
	addPopulation: ({ state, data }) => [...state.populations, ...data],

	isValid: ({ state }) =>
		state.location === ''
		|| state.totalPopulation === ''
		|| state.malePopulation === ''
		|| state.femalePopulation === '',

	removePopulation: ({ state, data }) =>
		state.populations.filter((population) => population.id !== data),
};

export default Population;
