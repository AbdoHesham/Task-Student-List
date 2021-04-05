import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/shared/models/student';
import { FooterService } from 'src/shared/services/service-footer/footer.service';
import { NavService } from 'src/shared/services/service-nav/nav.service';
import { HomeService } from '../../../shared/services/home/home.service';
const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any;
  page: number = 1;
  studentPerPage: number = 6;
  totalPages: any;
  totallength: any;
  ourData: any;
  totallengthForData: any;
  pageSize = 6;
  STUDENTS: Student[] = [];

  // currentLang: string;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    public HomeService: HomeService,
    public ftr: FooterService,
    public nav: NavService
  ) {}

  ngOnInit() {
    this.getAllStudents(this.page,this.pageSize);
    this.nav.show();
    this.ftr.show();
  }

  show() {
    this.toastr.success('done');
  }

  getAllStudents(pageNum: number,pageSize:number  ) {
    this.HomeService.getStudents(pageNum, pageSize).subscribe(
      (res) => {
        this.data = res;
        console.log(this.data);
        this.ourData = this.data.data;
        this.STUDENTS = this.ourData;
        this.totallength = this.ourData.length;
        this.totallengthForData = this.data.total;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  students: Student[] = [];
  //pagination
  callPage(number: number) {
    // this.students = this.STUDENTS.map((student, i) => ({
    //   id: i + 1,
    //   ...student,
    // })).slice(
    //   (this.page - 1) * this.pageSize,
    //   (this.page - 1) * this.pageSize + this.pageSize
    // );
    this.getAllStudents(+number,this.pageSize);
    console.log(this.pageSize)
  }
}
