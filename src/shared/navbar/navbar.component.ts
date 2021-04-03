import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // @HostListener('window:scroll', ['$event'])
  scrolled:boolean=false
  @HostListener("document:scroll", [])
  onWindowScroll() {
  (window.pageYOffset > 60) ? this.scrolled = true : this.scrolled = false

}

  lang = 'en';
  public isMenuCollapsed = true;
  // isScrolled = false;

  constructor() {

  }

  ngOnInit(): void {
    this.changeLang()

  }

  changeLang() {
    this.lang == 'en'?document.dir ='ltr':document.dir ='ltr'

  }
}
