import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterService } from 'src/shared/services/service-footer/footer.service';
import { NavService } from 'src/shared/services/service-nav/nav.service';
import { HomeService } from '../../../shared/services/home/home.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  data: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private HomeService: HomeService,
    public ftr: FooterService,
    public nav: NavService
  ) {}
  studentId: any;
  ngOnInit(): void {
    this.studentId = this.activatedRoute.snapshot.params['id'];
    this.getSingleStudent();
    this.nav.show();
    this.ftr.show();
  }

  getSingleStudent() {
    console.log(this.studentId);
    this.HomeService.getStudentById(this.studentId).subscribe(
      (res) => {
        this.data = res.data;
        console.log(this.data);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
