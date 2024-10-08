export default function getStudentsByLocation(arr, city) {
  return arr.filter((e) => e.location === city);
}

// myArray.filter((element, index, array) => { /* ... */ })
// let filteredUsers = users.filter((user) => {
//    return user.age > 40 && user.occupation === 'programmer';
// });
