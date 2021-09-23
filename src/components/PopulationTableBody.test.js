/* eslint-disable max-statements */

import { render } from '@testing-library/react';
import PopulationTableBody from './populationTableBody';

test('PopulationTableBody return the table data', () => {
	const id = 'id';
	const location = 'location';
	const totalPopulation = 'totalPopulation';
	const malePopulation = 'malePopulation';
	const femalePopulation = 'femalePopulation';

	const { getByRole } = render(PopulationTableBody({
		id, location, totalPopulation, malePopulation, femalePopulation,
	}));
	const component = getByRole('populationTableBody');

	expect(component).toBeInTheDocument();
	expect(getByRole('location')).toBeInTheDocument();
	expect(getByRole('totalPopulation')).toBeInTheDocument();
	expect(getByRole('malePopulation')).toBeInTheDocument();
	expect(getByRole('femalePopulation')).toBeInTheDocument();

	expect(getByRole('location')).toHaveTextContent(location);
	expect(getByRole('totalPopulation')).toHaveTextContent(totalPopulation);
	expect(getByRole('malePopulation')).toHaveTextContent(malePopulation);
	expect(getByRole('femalePopulation')).toHaveTextContent(femalePopulation);
});
