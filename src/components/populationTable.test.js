/* eslint-disable max-statements */
jest.mock('../core/context', () => ({
	state: { populations: Symbol('populations') },
	config: { tableTitle: Symbol('tableTitle') },
}));

import { React } from 'react';
import { render } from '@testing-library/react';
import PopulationTable from './populationTable';
import * as Container from './container';
import context from '../core/context';
import PopulationTableHead from './populationTableHead';
import PopulationTableBody from './populationTableBody';

test('PopulationTable return table', () => {
	jest.spyOn(Container, 'default')
		.mockReturnValueOnce(<th role="populationTableHead"/>)
		.mockReturnValueOnce(<tr role="populationTableBody"/>);
	const { getByRole } = render(PopulationTable());
	const component = getByRole('populationTable');

	expect(component).toBeInTheDocument();
	// TODO: Use forEach.
	expect(getByRole('tableHead')).toBeInTheDocument();
	// TODO: Test parent-child relationship.
	expect(getByRole('tableTitle')).toBeInTheDocument();
	expect(getByRole('tableBody')).toBeInTheDocument();
	expect(getByRole('populationTableHead')).toBeInTheDocument();
	expect(getByRole('populationTableBody')).toBeInTheDocument();

	// TODO: Pass context instead.
	expect(Container.default)
		.toHaveBeenCalledWith(context.config.tableTitle, PopulationTableHead);
	expect(Container.default)
		.toHaveBeenCalledWith(context.state.populations, PopulationTableBody);
});
