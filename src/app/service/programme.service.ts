import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Programme } from '../models/programme';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {
  url: string = "http://localhost:8081/programme"
  constructor(private http: HttpClient) { }

  getAllProgramme(): Observable<Programme[]> {
    return this.http.get<Programme[]>(this.url+"/all-programme");
  }

  saveProgramme(data:any): Observable<any> {
    return this.http.post<any>(this.url+"/add-programme", data);
  }

  deleteProgramme(id: number): Observable<any> {
    return this.http.delete<any>(this.url+`/delete-programme/${id}`);
  }
}
