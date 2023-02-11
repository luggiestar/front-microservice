import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  url:String = "http://localhost:8082/student-result/"
  url2:String = "http://localhost:8081/student/"
  constructor(private http: HttpClient) { }

  getStudentResult(id: number):Observable<any> {
    return this.http.get<any>(this.url+`student-result/${id}`);
  }

  getStudent(id: number):Observable<Student> {
    return this.http.get<Student>(this.url2+`student/${id}`);
  }
}
