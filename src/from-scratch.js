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



const sortWords = (arr, callback) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {

    }
  }
  return newArr
};

const sortNumbers = () => {
};

const sortNumbersBetter = () => {
};

const sortUsersByOrder = () => {
};

const sortUsersByName = () => {
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
