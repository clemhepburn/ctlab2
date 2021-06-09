export function map(arr, callback) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr[i] = callback(arr[i]);
  }

  return newArr;
}

export function filter(arr, callback) {
  let filteredArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) filteredArr = [...filteredArr, arr[i]];
  }
  return filteredArr;
}

export function findIndex(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i]))
      return i;
  }
  return -1;
}


