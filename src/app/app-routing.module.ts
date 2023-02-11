import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentsComponent} from "./students/students.component";
import { ProgrammeComponent } from './programme/programme.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: "",
    component: StudentsComponent
  },

  {
    path: "programme",
    component: ProgrammeComponent
  },

  {
    path: "result/:id",
    component: ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
