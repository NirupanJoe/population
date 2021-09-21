import Actions from './actions';

describe('Actions', () => {
	const { LocationInput } = Actions;
	const data = Symbol('data');

	test('LocationInput', () => {
		const result = LocationInput({ data });

		expect(result).toMatchObject({
			location: data,
		});
	});
})
;
