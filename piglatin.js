// http://courses.ics.hawaii.edu/ics314s18/morea/coding-standards/inclass-five-problems-3.html

function piglatin(words) {
  return _.map(words, value => `${value}-ay`);
}

console.log(piglatin(['apple', 'pear']));
console.log(piglatin(['you', 'can', 'win']));
