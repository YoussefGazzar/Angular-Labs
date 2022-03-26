import { Component, Input, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  constructor(private MyStudentService:StudentsService) {}
  
  @Input() Students:any;
  
  ngOnInit(): void {}

  deleteStudent(id:number){
    this.MyStudentService.deleteStudent(id).subscribe();

    // BAD SOLUTION....
    window.location.reload();
  }

}
