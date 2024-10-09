export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((element) => element.location === city)
    .map((item) => {
      for (const grade of newGrades) {
        if (grade.studentId === item.id) {
          const mapItem = item;
          mapItem.grade = grade.grade;
        } else {
          const mapItem = item;
          mapItem.grade = 'N/A';
        }
      }
      return item;
    });
}
