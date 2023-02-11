import { Component, OnInit } from '@angular/core';
import { ProgrammeService } from '../service/programme.service';
import { Programme } from '../models/programme';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {
  programmeList: Array<Programme> = [];
  constructor(
    private service:ProgrammeService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProgramme();
  }

  getProgramme():any {
    this.service.getAllProgramme().subscribe(
      response => {
        this.programmeList = response;
      }
    )
  }

  saveProgramme(form: NgForm):any {
    let formData:Programme = form.value;
    this.service.saveProgramme(formData).subscribe(
      response => {
        this.programmeList.push(response);
      }
    )
  }

  deleteProgramme(id:number, i:number) :any {
    this.service.deleteProgramme(id).subscribe(
      response => {
        if(response.message == "deleted") {
          this.programmeList.splice(i, 1);
        }
        else {
          console.log(response);
        }
      }
    )
  }

}
