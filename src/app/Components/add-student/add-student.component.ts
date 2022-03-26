import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit, OnDestroy {

  constructor(private MyStudentService:StudentsService) { }

  mySubscription:any;

  ngOnDestroy(): void {
    if(this.mySubscription)
      this.mySubscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  addStudent(name:any, age:any){
    let student = {name, age};
    this.mySubscription = this.MyStudentService.addStudent(student).subscribe();
  }

}
