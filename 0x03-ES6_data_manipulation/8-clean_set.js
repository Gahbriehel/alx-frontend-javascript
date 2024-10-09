export default function cleanSet(set, startString) {
  const res = [];
  let result = '';
  if (startString && typeof startString === 'string') {
    for (const setC of set) {
      if (setC && setC.startsWith(startString)) {
        const temp = setC.slice(startString.length);
        res.push(temp);
      }
    }
    result = res.join('-');
  }
  return result;
}
