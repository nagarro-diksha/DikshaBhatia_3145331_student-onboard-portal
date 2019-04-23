import { Pipe, PipeTransform } from '@angular/core';
import { IStudents } from '../models/student';

@Pipe({
  name: 'studentCategoryFilter'
})
export class StudentCategoryFilterPipe implements PipeTransform {

  transform(students: IStudents[], filterCategory: string): any {
    if (!students || !filterCategory) {
      return students;
    }

    if (filterCategory) {
      console.log(filterCategory.toLowerCase() === "all");
      console.log(filterCategory);
      if (filterCategory.toLowerCase() === "all") {
        return students;
      } else {
        return students.filter(student =>
          student.category.toLowerCase().indexOf(filterCategory.toLowerCase()) !== -1
        )
      }
    }

  }
}
