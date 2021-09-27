/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */

import { React } from 'react';
import { render } from '@testing-library/react';
import PopulationTableBody from './populationTableBody';
import * as RemoveButton from './removeButton';

describe('PopulationTableBody', () => {
	const id = 'id';
	const location = 'location';
	const totalPopulation = 'totalPopulation';
	const malePopulation = 'malePopulation';
	const femalePopulation = 'femalePopulation';

	test('PopulationTableBody return the table', () => {
		const { getByRole } = render(<table><tbody>
			{PopulationTableBody({
				id, location, totalPopulation, malePopulation, femalePopulation,
			})}</tbody></table>);
		const component = getByRole('populationTableBody');

		expect(component).toBeInTheDocument();
		expect(getByRole('location')).toBeInTheDocument();
		expect(getByRole('totalPopulation')).toBeInTheDocument();
		expect(getByRole('malePopulation')).toBeInTheDocument();
		expect(getByRole('femalePopulation')).toBeInTheDocument();

		expect(getByRole('location')).toHaveTextContent(location);
		expect(getByRole('totalPopulation')).toHaveTextContent(totalPopulation);
		expect(getByRole('malePopulation')).toHaveTextContent(malePopulation);
		expect(getByRole('femalePopulation'))
			.toHaveTextContent(femalePopulation);
	});

	test('removePopulation in table', () => {
		jest.spyOn(RemoveButton, 'default')
			.mockReturnValue(<button role="removeButton"/>);

		const { getByRole } = render(<table><tbody>
			{PopulationTableBody({
				id, location, totalPopulation, malePopulation, femalePopulation,
			})}</tbody></table>);

		expect(getByRole('removePopulation')).toBeInTheDocument();
		expect(getByRole('removeButton')).toBeInTheDocument();
		expect(RemoveButton.default).toHaveBeenCalledWith(id);
	});
});
