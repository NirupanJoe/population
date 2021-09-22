import Container from './container';

test('Container return a component', () => {
	const component = Symbol('component');
	const returnValue = Symbol('returnValue');
	const data = [Symbol('data')];

	jest.spyOn(data, 'map').mockReturnValue(returnValue);

	const result = Container(data, component);

	expect(data.map).toHaveBeenCalledWith(component);
	expect(result).toEqual(returnValue);
});
