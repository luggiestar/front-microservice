import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from '../service/result.service';
import { Result } from '../models/result';
import { Student } from '../models/student';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  resultList: Array<Result> = [];
  student:any;

  constructor(private route:ActivatedRoute, private service:ResultService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.getStudentResult(id);
    this.getStudent(id);
  }

  getStudentResult(id:any):void {
    this.service.getStudentResult(id).subscribe(
      response => {
        this.resultList = response;
      }
    )
  }

  getStudent(id:any):void {
    this.service.getStudent(id).subscribe(
      response => {
        this.student = response;
        console.log(this.student);
      }
    )
  }

}
