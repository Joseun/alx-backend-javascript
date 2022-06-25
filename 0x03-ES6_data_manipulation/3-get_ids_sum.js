// a function getStudentIdsSum that returns the sum of all the student ids
export default function getStudentIdsSum(students) {
  if (typeof students !== 'object' || students instanceof Array === false) {
    return [];
  }
  const sumIds = students.reduce((total, student) => total + student.id, 0);
  return sumIds;
}
