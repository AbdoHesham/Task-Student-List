import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  // currentLang: string;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private HomeService: HomeService
  ) {}

  ngOnInit() {
    this.getAllStudents(this.page, this.studentPerPage);
  }

  show() {
    this.toastr.success('done');
  }

  getAllStudents(pageNum: number, studentPerPage: number) {
    this.HomeService.getStudents(pageNum, studentPerPage).subscribe(
      (res) => {
        this.data = res;
        this.ourData = this.data.data;
        console.log(  this.ourData)
        this.totallength = this.ourData.length;
        this.totallengthForData=this.data.total;
        console.log("totallength + "+this.totallength);
        this.totalPages = this.data.total_pages;
        console.log(' total pages  +' + this.totalPages);
        console.table(this.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }
  //pagination
  callPage(number: number, studentPerPage: number) {
    this.getAllStudents(+number - 1, studentPerPage);
  }
}
