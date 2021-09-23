import { render } from '@testing-library/react';
import PopulationTableHead from './populationTableHead';

test('PopulationTableHead return table head', () => {
	const head = 'head';

	const component = render(PopulationTableHead(head))
		.getByRole('populationTableHead');

	expect(component).toBeInTheDocument();
	expect(component).toHaveTextContent(head);
});
