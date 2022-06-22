//a function getStudentsByLocation that returns an array of objects who are located in a specific city.
function getStudentsByLocation(students, city) {
    if (typeof students !==  "object" || students instanceof Array === false) {
        return [];
    }
    const students_by_location = students.filter((student) => student.location === city);
    return students_by_location
  }
export default getStudentsByLocation;