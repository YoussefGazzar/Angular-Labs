import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit, OnDestroy {

  mySubscription:any;
  name:any;
  age:any;
  id:any;
  student:any;

  constructor(private MyStudentService:StudentsService, private MyActivatedRoute:ActivatedRoute) { 
    this.id = this.MyActivatedRoute.snapshot.params["id"];
  }

  ngOnDestroy(): void {
    if(this.mySubscription)
      this.mySubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.student = this.MyStudentService.getStudentByID(this.id).subscribe(
      (data)=>{
        this.student = data;
        this.name = this.student.name;
        this.age = this.student.age;
      }
    )
  }

  updateStudent(){
    this.student = {name:this.name, age:this.age, id:this.id};
    this.mySubscription = this.MyStudentService.updateStudent(this.student).subscribe();
  }

}
