

const calculator = require("./calc");
const capitalize = require("./words");
const reverse = require("./reverse");
const obj = require("./array_analysis");
const cesar = require("./cesars");

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts 5 - 1 to equal 4", () => {
  expect(calculator.subtract(5, 1)).toEqual(4);
});

test("divides 10 and 5 to equal 2", () => {
  expect(calculator.divide(10, 5)).toEqual(2);
});

test("multiplies 6 and 2 to equal 12", () => {
  expect(calculator.multiply(6, 2)).toEqual(12);
});


test("capitalize first letter of a word", () => {
  expect(capitalize('candy')).toBe('Candy');
});

test("reverses an array", () => {
  expect(reverse(['melissa','john','kobe','mike'])).toEqual([ 'mike', 'kobe', 'john', 'melissa' ]);
});

test("find min, max, average and length of an array", () => {
  expect(obj.Analyze([5,6,7,1,6,7,9])).toBe('average:6 minimum:1 maximum:9 length:7 ');
});

test("decodes a string using cesars cypher", () => {
  expect(cesar('ebno')).toBe('damn');
});
test("decodes a string using cesars cypher reguardless of uppercase", () => {
  expect(cesar('EBNO')).toBe('DAMN');
});
test("decodes a string using cesars cypher (z's and a's work as normal)", () => {
  expect(cesar('afbm')).toBe('zeal');
});
test("decodes a string using cesars cypher with puncuation", () => {
  expect(cesar('Hp, ipnf.???!!!')).toBe('Go, home.???!!!');
});