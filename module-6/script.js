import users from './users.js';

// --------------------- # 1 ---------------------------
// Получить массив имен всех пользователей(поле name).

// const playerNames = users.map(function (user) {
//   return user.name;
// });

// console.log(playerNames);
//
// --------------------------------------
const getUserNames = users => {
  const userNames = users.map(function (user) {
    return user.name;
  });
  return userNames;
};
// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
//
//
// ------------------------------- # 2 -------------------------
// Получить массив объектов пользователей по цвету глаз(поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  const userEyeColor = users.filter(function (user) {
    return user.eyeColor === color;
  });
  return userEyeColor;
};

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
//
//
// ------------------------------ # 3 ------------------------------
//
// Получить массив имен пользователей по полу(поле gender).

const getUsersWithGender = (users, gender) => {
  const filteredGender = users
    .filter(function (user) {
      if (user.gender === gender) return user.name;
    })
    .map(function (user) {
      return user.name;
    });
  return filteredGender;
};

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
//
//
// ------------------------- # 4 ------------------------------------
//Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  const userIsNotActive = users.filter(function (user) {
    return user.isActive === false;
  });
  return userIsNotActive;
};

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
//
//
// ----------------------------- # 5 ----------------------------------
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  const userEmail = users.find(function (user) {
    return user.email === email;
  });
  return userEmail;
};

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
//
//
// ---------------------------- # 6 ----------------------------------------
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
  const userAge = users.filter(function (user) {
    return user.age >= min && user.age <= max;
  });
  return userAge;
};

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
//
//
// -------------------------- # 7 ------------------------------------
//
//Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  const totalBalance = users.reduce(function (balance, user) {
    return balance + user.balance;
  }, 0);
  return totalBalance;
};
//
// console.log(calculateTotalBalance(users)); // 20916
//
//
//  ------------------------ # 8 ------------------------------------
//
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  const filteredUsers = users.filter(function (user) {
    return user.friends.includes(friendName);
  });
  return filteredUsers;
};

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
//
//
// -------------------------- # 9 ----------------------------------
//
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  const sortedUsers = [...users].sort(function (prevUser, nextUser) {
    return prevUser.friends.length - nextUser.friends.length;
  });
  return sortedUsers;
};

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
//
//
// ------------------------- # 10 ---------------------------------
//
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  const allSkills = users
    .reduce(function (skills, user) {
      skills.push(...user.skills);
      return skills;
    }, [])
    .sort();
  return allSkills;
};

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
