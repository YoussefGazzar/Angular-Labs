import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private MyStudentService:StudentsService) { }

  Students:any;

  ngOnInit(): void {
    this.MyStudentService.getAllStudents().subscribe(
      (data)=>{
        this.Students = data;
      }
    )
  }

}
