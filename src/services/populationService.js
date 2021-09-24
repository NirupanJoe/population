const Population = {
	addPopulation: ({ state, data }) => [...state.populations, ...data],

	isActive: ({ state }) =>
		state.location === ''
		|| state.totalPopulation === ''
		|| state.malePopulation === ''
		|| state.femalePopulation === '',

	removePopulation: ({ state, data }) =>
		state.populations.filter((population) => population.id !== data),
};

export default Population;
