import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private MyClient:HttpClient) {}

  BaseURL = "http://localhost:3000/students";

  getAllStudents() {
    return this.MyClient.get(this.BaseURL);
  }

  getStudentByID(id:number) {
    return this.MyClient.get(`${this.BaseURL}/${id}`);
  }

  addStudent(student:any){
    return this.MyClient.post(this.BaseURL, student);
  }

  updateStudent(student:any){
    return this.MyClient.put(`${this.BaseURL}/${student.id}`, student);
  }

  deleteStudent(id:number){
    return this.MyClient.delete(`${this.BaseURL}/${id}`);
  }
}