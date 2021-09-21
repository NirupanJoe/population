import Population from '../services/populationService';

const LocationInput = ({ data }) => ({
	location: data,
});

const AddPopulation = (context) => ({
	population: Population.addPopulation(context),
	location: '',
});

const actions = {
	LocationInput,
	AddPopulation,
};

export default actions;
