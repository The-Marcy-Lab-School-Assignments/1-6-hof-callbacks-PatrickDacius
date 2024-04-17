const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) return false;
  }
  return true;
};

const sortUsersBy = (users, sortingFunction) => {
  return [...users].sort(sortingFunction);
};

const logEachName = (names) => {
  names.forEach((value, index, arr) => {
    console.log(value, index, arr)
  })
};

const logEachUserBio = (users) => {
  return users.forEach((value) => {
    console.log(value.bio);
  })
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
