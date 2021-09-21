const Population = {
	addPopulation: ({ state }) =>
		[...state.population, {
			location: state.location,
			totalPopulation: state.totalPopulation,
		}],

	isActive: ({ state }) => state.location === '',
};

export default Population;
