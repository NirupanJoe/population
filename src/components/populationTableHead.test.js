import { React } from 'react';
import { render } from '@testing-library/react';
import PopulationTableHead from './populationTableHead';

test('PopulationTableHead return table head', () => {
	const head = 'head';

	const component = render(<table>
		<thead><tr>{PopulationTableHead(head)}</tr></thead>
	</table>).getByRole('populationTableHead');

	expect(component).toBeInTheDocument();
	expect(component).toHaveTextContent(head);
});
