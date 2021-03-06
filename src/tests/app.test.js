import { map, filter, findIndex, reduce } from '../app.js';


describe('map', () => {
  it('takes an array and callback and creates a new array with the return value of each called callback', () => {
    const input = [3, 4, 5, 6];

    const newArray = map(input, (n) => {return n * 2;});
    expect(newArray).toEqual([6, 8, 10, 12]);

  });
});

describe('filter', () => {
  it('returns an array of filtered items', () => {
    const input = [1, 2, 3, 4];

    const filteredArray = filter(input, (n) => {return (n > 2 ? n : 0);});
    expect(filteredArray).toEqual([3, 4]);
  });
});

describe('findIndex', () => {
  it('returns the index of the found item', () => {
    const input = [1, 3, 4, 6, 7, 2];

    const findArr = findIndex(input, (n) => {return n === 2;});
    expect(findArr).toEqual(5);
  });
});

describe('reduce', () => {
  it('returns accumulator', () => {
    const input = [1, 2, 3, 4];

    const reduceArr = reduce(input, (n) => {return n * n;}, 0);
    expect(reduceArr).toEqual(16);
  });
});

