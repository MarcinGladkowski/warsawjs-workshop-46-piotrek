/**
 * Write a point-free function that returns all animals which names are shorter
 * than 5. Each animal is an object with the following shape:
 * ```
 * {
 *   name: string,
 *   kind: string,
 *   age: number,
 * }
 * ```
 * Example:
 * ```
 * Input = [
 *   { name: 'Fifi', kind: 'dog', age: 4 },
 *   { name: 'Pancake', kind: 'cat', age: 2 },
 *   { name: 'Lo', kind: 'parrot', age: 5 },
 * ]
 * Output = [
 *   { name: 'Fifi', kind: 'dog', age: 4 },
 *   { name: 'Lo', kind: 'parrot', age: 5 },
 * ]
 * ```
 */

// First solution working only two functions
const prop = propName => obj => obj[propName]
const shorterThan = n => property => property.length < n
const compose = (f, g) => x => f(g(x))
export const getShortNamedAnimals = (animals) => animals.filter(compose(shorterThan(5), prop('name')));

// more complex solution using pipe
// const prop = property => x => x[property]
// const map = fn => array => array.map(fn)
// const composeRight = (...fs) => x => fs.reduceRight((x, f) => f(x), x)
// const pipe = (...fs) => x => fs.reduce((x, f) => f(x), x)

// export const getShortNamedAnimals = (animals) => animals.pipe()
