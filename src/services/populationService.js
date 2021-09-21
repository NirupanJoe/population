const Population = {
	addPopulation: ({ state }) =>
		[...state.population, {
			location: state.location,
			totalPopulation: state.totalPopulation,
		}],

	isActive: ({ state }) => state.totalPopulation === '',
};

export default Population;
