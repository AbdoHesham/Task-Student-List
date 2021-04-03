import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HomeService}from '../../../shared/services/home/home.service'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  data: any;
  constructor(private activatedRoute: ActivatedRoute, private route: Router , private HomeService :HomeService) {}
  studentId:any
  ngOnInit(): void {
  this.studentId=  this.activatedRoute.snapshot.params['id'];
    this.getSingleStudent()
  }

  getSingleStudent() {
    console.log(this.studentId)
    this.HomeService.getStudentById(this.studentId).subscribe(
      res=>{
        this.data=res.data
        console.log(this.data)
      },
      err=>{
        console.error(err)
      }
    )
  }
}
