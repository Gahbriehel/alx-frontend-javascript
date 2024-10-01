export default function createIteratorObject(report) {
  const newArray = [];
  for (const arr of Object.values(report)) {
    newArray.push(arr);
  }
  return newArray;
}
