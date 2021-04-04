import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/shared/services/service-footer/footer.service';
import { NavService } from 'src/shared/services/service-nav/nav.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    public ftr : FooterService,
    public nav: NavService,
    ) { }

  ngOnInit(): void {
    this.nav.hide();
    this.ftr.hide();
  }

}
