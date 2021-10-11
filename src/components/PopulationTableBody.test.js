/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */

import { React } from 'react';
import { render } from '@testing-library/react';
import PopulationTableBody from './populationTableBody';
import * as RemoveButton from './removeButton';
import * as PopulationBodyShell from './populationBodyShell';

describe('PopulationTableBody', () => {
	const id = 'id';
	const location = 'location';
	const totalPopulation = 'totalPopulation';
	const malePopulation = 'malePopulation';
	const femalePopulation = 'femalePopulation';

	test('PopulationTableBody return the table', () => {
		jest.spyOn(PopulationBodyShell, 'default')
			.mockReturnValueOnce(<div role={ location }/>)
			.mockReturnValueOnce(<div role={ totalPopulation }/>)
			.mockReturnValueOnce(<div role={ malePopulation }/>)
			.mockReturnValueOnce(<div role={ femalePopulation }/>)
		;
		jest.spyOn(RemoveButton, 'default')
			.mockReturnValue(<div role="removeButton"/>);

		const { getByRole } = render(PopulationTableBody({
			id, location, totalPopulation, malePopulation, femalePopulation,
		}));
		const component = getByRole('populationTableBody');

		expect(component).toBeInTheDocument();
		expect(getByRole(location)).toBeInTheDocument();
		expect(getByRole(totalPopulation)).toBeInTheDocument();
		expect(getByRole(malePopulation)).toBeInTheDocument();
		expect(getByRole(femalePopulation)).toBeInTheDocument();
		expect(PopulationBodyShell.default)
			.toHaveBeenCalledWith(location, location);
		expect(PopulationBodyShell.default)
			.toHaveBeenCalledWith(totalPopulation, totalPopulation);
		expect(PopulationBodyShell.default)
			.toHaveBeenCalledWith(malePopulation, malePopulation);
		expect(PopulationBodyShell.default)
			.toHaveBeenCalledWith(femalePopulation, femalePopulation);
	});
});
