import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
constructor(private readonly router : ActivatedRoute, 
  private readonly studentsService: StudentsService
   ) {

}
ngOnInit() : void {
  this.router.params.subscribe(params =>{
    console.log(params)
    console.log(this.studentsService.getStudentById(params['id']))
  });
  
}


}
