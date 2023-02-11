import { Component, OnInit } from '@angular/core';
import {StudentService} from "../service/student.service";
import {NewStudent, Student} from "../models/student";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentList: Array<Student> = [];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent():any {
    this.studentService.getAllStudent().subscribe(
      resp => {this.studentList = resp}
    )
  }

  saveStudent(form: NgForm):any {
    let formData:NewStudent = form.value
    this.studentService.saveNewStudent(formData).subscribe(
      response => {
        this.studentList.push(response);
      }
    )
  }

  deleteStudent(studentId: number, index: number) {
    this.studentService.deleteStudent(studentId).subscribe(
      response => {
        if(response.message == "deleted") {
          this.studentList.splice(index, 1);
        }
        else {
          console.log(response.message);
        }
      }
    )
  }
}
