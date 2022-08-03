const results = require("./swapi");
const characters = require("./swapi");
// ****** DO NOT CHANGE THE LINE ABOVE
// ****** IN THIS EXERCISE, TIME EACH CONSOLE.LOG ONE AT A TIME AND THEN COMMENT IT BACK OUT OR OTHER FUNCTIONS WILL NOT TEST CORRECTLY

/**
 * listAllCharacters()
 * -------------------
 * Returns all character names from an array of characters. If the inputted array is empty, throw an
 * Error.
 * You must use the .map method
 * 
 * 
 * @param {Object[]} characters - an array of movie characters
 * @returns {string[]|Error} an array of strings, which are character names or an error
 *
 * EXAMPLE:
 * 
 * listAllCharacters([])
 * 
 * /Users/9.0-instructor/Desktop/Pursuit/jd-module-two-mid-assessment-practice/index.js:36
 * if (!characters.length) throw Error;
 *                        ^
 * [Function: Error] { stackTraceLimit: 10 }
 * 
 * 
 * 
 * listAllCharacters(characters);
 *
 * //> [
  'Luke Skywalker',
  'C-3PO',
  'R2-D2',
  'Darth Vader',
  'Leia Organa',
  'Owen Lars',
  'Beru Whitesun Lars',
  'R5-D4',
  'Biggs Darklighter',
  'Obi-Wan Kenobi'
   ];
 *
 */

function listAllCharacters(characters) {
  if (!characters.length) {
    throw "Error";
  }
  // return characters.map(({ name }) => {
  //   if (name) {
  //     return name;
  //   }
  // });

  return characters.map(({ name }) => name);

  // characters.reduce((acc, { name }) => {
  //   if (name) {
  //     acc.push(name);
  //   }
  //   return acc;
  // }, []);
}

//UNCOMMENT THE LINES ONE AT A TIME BELOW TO TEST YOUR SOLUTION MANUALLY, THEN COMMENT BACK IN
// console.log(listAllCharacters([]));
// console.log(listAllCharacters(characters));

//*************************************************************************************************/

/**
 * averageHeightOfAllCharacters()
 * ------------------------------
 * Returns the average height of all of the listed characters
 * Must use .forEach method to solve this problem
 *
 * @param {Object[]} characters - an array of movie characters
 * @returns {number} - a number representing the average height
 *
 * No example for this one. You should be able to find the average at this point
 */

function averageHeightOfAllCharacters(characters) {
  //guard clause

  if (!characters.length) {
    throw "error";
  }
  // let average = 0;
  // characters.forEach((a) => {
  //   if (a.height) {
  //     average += a.height / characters.length;
  //     Number(average.toFixed(1));
  //   }
  // });
  // return average;

  return characters.reduce(
    (avg, { height }) => (avg += Number(height / characters.length)),
    0
  );
}

//UNCOMMENT THE LINES ONE AT A TIME BELOW TO TEST YOUR SOLUTION MANUALLY, THEN COMMENT BACK IN
// console.log(averageHeightOfAllCharacters(characters));

//*************************************************************************************************/

/**
 * checkForEyeColor()
 * -----------------
 * Returns an boolean if a character has the inputted eye color
 * If the inputted array is empty, throw an Error with a message
 * You must use the .some method.
 *
 * @param {Object[]} characters - an array of movie characters
 * @param {string}  eyes - a string representing the inputted eye color
 * @returns {Boolean|Error} - returns true or false depending on whether anyone has the eye color inputted as an argument or an Error.
 *
 * EXAMPLE:
 * checkForEyeColor([], 'blue-gray')
 *
 * //>                    ^
 * Error: No one has that eye color
 * at checkForEyeColor (/Users/9.0-instructor/Desktop/Pursuit/
 * jd-module-two-mid-assessment-practice/index.js:84:33)
 *  at Object.<anonymous> (/Users/9.0-instructor/Desktop/Pursuit
 * jd-module-two-mid-assessment-practice/index.js:89:13)
 *
 *
 *
 *
 * checkForEyeColor(characters, 'blue-gray')
 *
 * true
 *
 */

function checkForEyeColor(characters, eyes) {
  if (!characters.length) {
    throw "Error: No one has that eye color";
  }
  return characters.some(({ eye_color }) => eye_color === eyes);
}

//UNCOMMENT THE LINES ONE AT A TIME BELOW TO TEST YOUR SOLUTION MANUALLY, THEN COMMENT BACK IN
// console.log(checkForEyeColor([]));
// console.log(checkForEyeColor(characters, "blue-gray"));

//*************************************************************************************************/

/**
 * getAllCharactersCreatedAfterYear()
 * ----------------------------------
 * Returns an array of objects based on all characters created after a certain year
 * You must use the .filter method
 * 
 * @param {Object[]} characters - an array of movie characters
 * @param {Number} date - date to be considered for when character object was created
 * @returns {Object[]} - returns an array of objects
 * 
 * EXAMPLE:
 * getAllCharactersCreatedAfterYear(characters, 2014)
 *
 * [
  {
    name: 'R2-D2',
    id: 'Kekk39dis',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
    ...
  },
  {
    name: 'Owen Lars',
    id: 'ErT8dk4k3',
    height: '178',
    mass: '120',
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
    ...
  },
  ... as many objects as qualify
 * 
 * 
 *
 */

function getAllCharactersCreatedAfterYear(characters, date) {
  // guard clause
  if (!characters.length) {
    throw "error";
  }
  return characters.filter(
    ({ created }) => Number(created.slice(0, 4)) >= date
  );
}

//UNCOMMENT THE LINES ONE AT A TIME BELOW TO TEST YOUR SOLUTION MANUALLY, THEN COMMENT BACK IN
// console.log(getAllCharactersCreatedAfterYear(characters, 2016));

//*************************************************************************************************/

/** getCharacterInMovie()
 *  ----------------------
 *  Returns an object from the first character who appeared in the designated movie
 *  If there characters array is empty or the movie string is empty throw an error.
 *  You must use the .find method
 * 
 *  @param {Object[]} characters - an array of movie characters
 *  @param {String} movie - string with the title of the movie
 *  @returns {Object|Error} - returns the object of the first character that was in the inputted movie
 *
 * EXAMPLE:
 *
 * getCharacterInMovie(characters, 'The Phantom Menace')
 * 
 * //> {
    name: 'C-3PO',
    id: 'Idkk99dkc',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
    homeworld: {
      name: 'Tatoine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid'
    },
    films: [
      'A New Hope',
      'The Empire Strikes Back',
      'Return of the Jedi',
      'The Phantom Menace',
      'Attack of the Clones',
      'Revenge of the Sith'
    ],
    species: ['Droid'],
    vehicles: [],
    starships: [],
    created: '2012-12-10T15:10:51.357000Z',
    edited: '2014-12-20T21:17:50.309000Z',
    url: 'https://swapi.dev/api/people/2/'
   }
 */

function getCharacterInMovie(characters, movie) {
  if (!characters.length || !movie.length) {
    throw "Error";
  }

  // concise version
  // return characters.find(({ films }) => films.includes(movie));

  // longer version
  return characters.find((character) => {
    // character.films.forEach((film) => {
    //   if (film === movie) {
    //     return characters;
    //   }
    let movies = character.films;
    return movies.find((film) => film === movie);
    // return characters.films;
  });
}
// }

//UNCOMMENT THE LINES ONE AT A TIME BELOW TO TEST YOUR SOLUTION MANUALLY, THEN COMMENT BACK IN
// console.log(getCharacterInMovie(characters, ''));
// console.log(getCharacterInMovie([], 'The Phantom Menace'));
// console.log(getCharacterInMovie(characters, 'The Phantom Menace'));

//*************************************************************************************************/
// ****BONUS NO TESTS FOR THIS

/** homeWorldValues()
 *  ----------------------
 * Returns an array of arrays.
 * Each inner array holds all of the values for the object of a character who has an eye color of yellow.
 *
 *  @param {Object[]} characters - an array of movie characters
 *
 *  @returns {Array[]}} - returns an array of arrays.
 */

function homeWorldValues(characters) {
  const values = characters.filter(({ eye_color }) => eye_color === "yellow");
  return values.forEach((obj) => console.log(Object.values(obj)));

  // const values2 = characters.reduce((acc, i) => {
  //   if (i.eye_color.includes("yellow")) {
  //     acc.push(i);
  //   }
  //   return acc;
  // }, []);
  // return values2.forEach((obj) => console.log(Object.values(obj)));
}

//UNCOMMENT THE LINE BELOW TO TEST YOUR SOLUTION MANUALLY, THEN COMMENT BACK IN
// console.log(homeWorldValues(characters));

//*************************************************************************************************/
// ****SECOND BONUS
// Go back and try to solve some of the previous problems using the .reduce method.
// You must test them manually

// DO NOT CHANGE ANYTHING BELOW THIS LINE
module.exports = {
  listAllCharacters,
  averageHeightOfAllCharacters,
  checkForEyeColor,
  getAllCharactersCreatedAfterYear,
  getCharacterInMovie,
};
