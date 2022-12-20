import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.model';

@Pipe({
  name: 'myCustomPipe'
})
export class MyCustomPipePipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): string {
    return args[0] +  ' ' + value.firstName  +  ' ' + value.lastName ;
  }

}
