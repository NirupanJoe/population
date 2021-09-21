const Population = {
	addPopulation: ({ state }) =>
		[...state.population, { location: state.location }],

	isActive: ({ state }) => state.location === '',
};

export default Population;
