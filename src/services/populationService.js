const Population = {
	addPopulation: ({ state, data }) => [...state.populations, ...data],

	isActive: ({ state }) =>
		state.location === ''
		|| state.totalPopulation === ''
		|| state.malePopulation === ''
		|| state.femalePopulation === '',
};

export default Population;
