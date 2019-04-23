import { PipeTransform, Pipe } from '@angular/core';
import { IStudents } from '../models/student';

@Pipe({
    name: 'studentNameFilter'
})
export class StudentNameFilterPipe implements PipeTransform {
    transform(students: IStudents[], searchInput: string): IStudents[] {
        if (!students || !searchInput ) {
            return students;
        }

        return students.filter(student =>
            student.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
        );
    }

}