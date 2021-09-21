import Population from '../services/populationService';

const LocationInput = ({ data }) => ({
	location: data,
});

const AddPopulation = (context) => ({
	population: Population.addPopulation(context),
	location: '',
	totalPopulation: '',
});

const TotalPopulationInput = ({ data }) => ({
	totalPopulation: data,
});

const actions = {
	LocationInput,
	AddPopulation,
	TotalPopulationInput,
};

export default actions;
