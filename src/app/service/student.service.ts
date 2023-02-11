import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewStudent, Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url: string = "http://localhost:8081/student"
  constructor(private http: HttpClient) { }

  getAllStudent() :Observable<Student[]> {
    return this.http.get<Student[]>(this.url+"/all-student")
  }

  saveNewStudent(student: NewStudent) :Observable<Student> {
    return this.http.post<Student>(this.url+"/new-student", student);
  }

  deleteStudent(studentId: number) :Observable<any> {
    return this.http.delete<any>(this.url+`/delete-student/${studentId}`)
  }
}
