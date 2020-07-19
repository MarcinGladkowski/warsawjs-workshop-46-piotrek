/**
 * Write a function that returns a function that checks if the argument is
 * of the type passed to the parent function.
 *
 * Examples:
 * ```
 * isA('string')('foo') // true
 * isA('number')(true) // false
 * isA(Map)(new Map()) // true
 * isA(Array)(1) // false
 * ```
 */

const add = (x, y) => x + y
add(2, 3) //=> 5

const curryingAdd = x => y => x + y

const curryingAddExecution = function (x) {
  return function (y) {
    return x + y
  }
}
// how to understand it!
// console.log([
//     add(2, 3),
//     curryingAdd(2)(3),
//     curryingAddExecution(2)(3)
// ])

const is = type => value => {
    return type === 'string' || type === 'number' ? typeof value === type : value instanceof type
}

export const isA = is;
