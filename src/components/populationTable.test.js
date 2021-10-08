/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
jest.mock('../core/context', () => ({
	state: { populations: Symbol('populations') },
	config: { tableTitle: Symbol('tableTitle') },
}));

import { React } from 'react';
import { render, within } from '@testing-library/react';
import PopulationTable from './populationTable';
import * as Container from './container';
import context from '../core/context';
import PopulationTableHead from './populationTableHead';
import PopulationTableBody from './populationTableBody';

test('PopulationTable return table', () => {
	jest.spyOn(Container, 'default')
		.mockReturnValueOnce(<div role="populationTableHead"/>)
		.mockReturnValueOnce(<div role="populationTableBody"/>);

	const { getByRole } = render(PopulationTable());
	const component = getByRole('populationTable');

	expect(component).toBeInTheDocument();
	expect(within(component).getByRole('populationTitle')).toBeInTheDocument();
	expect(Container.default)
		.toHaveBeenCalledWith(context.config.tableTitle, PopulationTableHead);
	expect(Container.default)
		.toHaveBeenCalledWith(context.state.populations, PopulationTableBody);
	expect(component).toHaveClass('population-table');
});
