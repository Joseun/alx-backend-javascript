//a function getStudentIdsSum that returns the sum of all the student ids
function getStudentIdsSum(students) {
    if (typeof students !==  "object" || students instanceof Array === false) {
        return [];
    }
    let sumIds = students.reduce((total, student) => total + student.id, 0);
    return sumIds
  }
export default getStudentIdsSum;
