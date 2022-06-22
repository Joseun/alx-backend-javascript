// a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade
function updateStudentGradeByCity(students, city, newGrades) {
    if (typeof students !==  "object" || students instanceof Array === false) {
        return [];
    }
    const students_by_location = students.filter((student) => student.location === city);
    const students_updated_grades = students_by_location.map((student) => {
        const gradesObj = newGrades.find((item) => item.studentId === student.id);
        if (gradesObj) {
            student.grade = gradesObj.grade;
        } else {
            student.grade = 'N/A';
        }
        return student;
        });
        return students_updated_grades;
  }
export default updateStudentGradeByCity;
