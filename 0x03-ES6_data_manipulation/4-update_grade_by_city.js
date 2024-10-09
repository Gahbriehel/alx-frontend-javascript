export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((element) => element.location === city)
    .map((item) => {
      for (const grade of newGrades) {
        if (grade.studentId === item.id) {
          item.grade = grade.grade;
        } else {
          item.grade = "N/A";
        }
      }
      return item;
    });
}
