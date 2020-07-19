const R = require('ramda')
/**
 * Write the same function from exercise 1, but this time use Ramda.
 */
const isShorterThan = n => str => str.length < n;

export const getShortNamedAnimals = R.filter(R.compose(isShorterThan(5), R.prop('name')));
