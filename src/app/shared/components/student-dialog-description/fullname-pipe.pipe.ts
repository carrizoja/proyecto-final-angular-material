import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../../models/student.model';

@Pipe({
  name: 'fullnamePipe'
})
export class FullnamePipePipe implements PipeTransform {

  transform(value: Student): string {
    return  ' ' + value.firstName  +  ' ' + value.lastName ;
  }
  

}
