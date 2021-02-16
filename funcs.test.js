import {capitalize, reverseStr, calculator, caesar, analize} from './funcs';

test('check capitalize', () => {
  expect(capitalize('hello')).toBe('Hello'),
  expect(capitalize('hEllO')).toBe('HEllO')
});

test('check reverseStr', () => {
  expect(reverseStr('hello')).toBe('olleh'),
  expect(reverseStr('world')).toBe('dlrow')
});

test('check calculator functions', () => {
  expect(calculator.add(1, 2)).toBe(3),
  expect(calculator.subtract(3, 2)).toBe(1),
  expect(calculator.multiply(2, 3)).toBe(6),
  expect(calculator.divide(10, 2)).toBe(5)
});

test('check Caesar', () => {
  expect(caesar('abc')).toBe('bcd'),
  expect(caesar('ldrnvk')).toBe('mesowl')
});

test('check analize', () => {
  expect(analize([1, 2, 3, 4, 5])).toStrictEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5
  })
  expect(analize([2, 6, 8, 3, 5, 1, 10])).toStrictEqual({
    average: 5,
    min: 1,
    max: 10,
    length: 7
  })
});