//a function getListStudentIds that returns an array of ids from a list of object.
function getListStudentsIds(students) {
    if (typeof students !==  "object" || students instanceof Array === false) {
        return [];
    }
    const studentsIds = students.map((student) => student.id);
    return studentsIds
  }
export default getListStudentsIds;
