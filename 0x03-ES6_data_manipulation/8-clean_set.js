// a function named cleanSet that returns a string of all the set values
// that start with a specific string (startString).
export default function cleanSet(set, startString) {
  if (!startString || !startString.length) {
    return '';
  }
  let newString = '';
  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      newString += newString.length === 0 ? element.replace(startString, '') : element.replace(startString, '-');
    }
  });
  return newString;
}
