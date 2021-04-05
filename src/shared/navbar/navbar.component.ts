import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth/auth.service';
import { NavService } from '../services/service-nav/nav.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // @HostListener('window:scroll', ['$event'])
  scrolled:boolean=false
  geartingName:[] =[];
  @HostListener("document:scroll", [])
  onWindowScroll() {
  (window.pageYOffset > 60) ? this.scrolled = true : this.scrolled = false

}

  lang = 'en';
  public isMenuCollapsed = true;
  // isScrolled = false;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    public nav: NavService,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.changeLang()
    this.geartingName=JSON.parse(localStorage.getItem('userdata')|| '{}').email


  }

  changeLang() {
    this.lang == 'en'?document.dir ='ltr':document.dir ='ltr'

  }

  logout() {
    if  (localStorage.getItem("userdata")) {
      localStorage.clear()

    }
    this.toastr.success("you are logout successfully")
    this.router.navigateByUrl('/home');
  }

isLogged(){

  return this.authService.isLoggedIn;
}



}
