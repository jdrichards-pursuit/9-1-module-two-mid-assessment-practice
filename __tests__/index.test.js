const {
  listAllCharacters,
  averageHeightOfAllCharacters,
  checkForEyeColor,
  getAllCharactersCreatedAfterYear,
  getCharacterInMovie
} = require('..');

const characters = require('../swapi');

describe.only('listAllCharacters', () => {
  test('should use the `.map()` method', () => {
    const text = listAllCharacters.toString();
    expect(text).toMatch(/\.map\(.*\)/s);
  });
  test('should throw an error if there are no characters', () => {
    const actual = () => listAllCharacters([]);
    expect(actual).toThrow();
  });
  test('should return all of the character names in an array', () => {
    const actual = listAllCharacters(characters);
    const expected = [
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
    expect(actual).toEqual(expected);
  });
});

describe('averageHeightOfAllCharacters', () => {
  test('should use the `.forEach()` method', () => {
    const text = averageHeightOfAllCharacters.toString();
    expect(text).toMatch(/\.forEach\(.*\)/s);
  });
  test('should return a number representing average height', () => {
    const actual = averageHeightOfAllCharacters(characters);
    const expected = 159.2;
    expect(actual).toEqual(expected);
  });
});

describe('checkForEyeColor', () => {
  test('should use the `.some()` method', () => {
    const text = checkForEyeColor.toString();
    expect(text).toMatch(/\.some\(.*\)/s);
  });
  test('should throw an error if movie array is empty', () => {
    const actual = () => checkForEyeColor([]);
    expect(actual).toThrow();
  });

  test('should return true if eye color exists', () => {
    const actual = checkForEyeColor(characters, 'blue-gray');
    const expected = true;
    expect(actual).toEqual(expected);
  });
  test('should return false if eye color does not exist', () => {
    const actual = checkForEyeColor(characters, 'lavender');
    const expected = false;
    expect(actual).toEqual(expected);
  });
});

describe('getAllCharactersCreatedAfterYear', () => {
  test('should use the `.filter()` method', () => {
    const text = getAllCharactersCreatedAfterYear.toString();
    expect(text).toMatch(/\.filter\(.*\)/s);
  });
  test('should return an array of characters created after a certain year', () => {
    const actual = getAllCharactersCreatedAfterYear(characters, 2016);
    const expected = [
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
        homeworld: {
          name: 'Tatooine',
          rotation_period: '23',
          orbital_period: '304',
          diameter: '10465',
          climate: 'arid'
        },
        films: ['A New Hope', 'Attack of the Clones', 'Revenge of the Sith'],
        species: [],
        vehicles: [],
        starships: [],
        created: '2016-12-10T15:52:14.024000Z',
        edited: '2014-12-20T21:17:50.317000Z',
        url: 'https://swapi.dev/api/people/6/'
      },
      {
        name: 'Beru Whitesun Lars',
        id: 'Ckdkke9d3',
        height: '165',
        mass: '75',
        hair_color: 'brown',
        skin_color: 'light',
        eye_color: 'blue',
        birth_year: '47BBY',
        gender: 'female',
        homeworld: {
          name: 'Tatooine',
          rotation_period: '23',
          orbital_period: '304',
          diameter: '10465',
          climate: 'arid'
        },
        films: ['A New Hope', 'Attack of the Clones', 'Revenge of the Sith'],
        species: [],
        vehicles: [],
        starships: [],
        created: '2018-12-10T15:53:41.121000Z',
        edited: '2014-12-20T21:17:50.319000Z',
        url: 'https://swapi.dev/api/people/7/'
      },
      {
        name: 'R5-D4',
        id: 'Qwfkr988d',
        height: '97',
        mass: '32',
        hair_color: 'n/a',
        skin_color: 'white, red',
        eye_color: 'red',
        birth_year: 'unknown',
        gender: 'n/a',
        homeworld: {
          name: 'Tatooine',
          rotation_period: '23',
          orbital_period: '304',
          diameter: '10465',
          climate: 'arid'
        },
        films: ['A New Hope'],
        species: ['Droid'],
        vehicles: [],
        starships: [],
        created: '2020-12-10T15:57:50.959000Z',
        edited: '2014-12-20T21:17:50.321000Z',
        url: 'https://swapi.dev/api/people/8/'
      }
    ];
    expect(actual).toEqual(expected);
  });
});

describe('getCharacterInMovie', () => {
  test('should throw error if movie array is empty', () => {
    const actual = () => getCharacterInMovie([]);
    expect(actual).toThrow();
  });
  test('should use the `.find()` method', () => {
    const text = getCharacterInMovie.toString();
    expect(text).toMatch(/\.find\(.*\)/s);
  });
  test('should return object of first character found', () => {
    const actual = getCharacterInMovie(characters, 'The Phantom Menace');
    const expected = {
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
    };
    expect(actual).toEqual(expected);
  });
});
