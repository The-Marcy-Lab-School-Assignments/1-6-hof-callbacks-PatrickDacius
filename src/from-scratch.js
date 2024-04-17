const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
};

const myMap = (arr, callback) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]))
  }
  return newArr
};

const myFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i]
    }
  }
  return undefined
}


const myFilter = (arr, callback) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push((arr[i]));
    }
  }
  return newArr
};



const sortWords = (arr) => {
  let newArr = [...arr]
  return newArr.sort()
}
const sortNumbers = (arr) => {
  let newArr = [...arr]
  return newArr.sort((a, b) => (a - b))

};

const sortNumbersBetter = (arr, isDescending) => {
  newArr = [...arr]
  if (isDescending === true) {
    return newArr.sort((a, b) => (b - a))
  } else return newArr.sort((a, b) => (a - b))
}

const sortUsersByOrder = (arr) => {
  newArr = [...arr]
  return newArr.sort((a, b) => (a.order - b.order))
};

const sortUsersByName = (arr) => {
  let newArr = [...arr]
  newArr.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return newArr
};

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
