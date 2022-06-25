// a function getStudentsByLocation that returns an array of objects who are
// located in a specific city.
export default function getStudentsByLocation(students, city) {
  if (typeof students !== 'object' || students instanceof Array === false) {
    return [];
  }
  const studentsByLocation = students.filter((student) => student.location === city);
  return studentsByLocation;
}
