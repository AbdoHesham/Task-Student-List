import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FooterService } from 'src/shared/services/service-footer/footer.service';
import { NavService } from 'src/shared/services/service-nav/nav.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show: boolean=false
  userCredentials: {}={};

  constructor(public ftr : FooterService,
    public nav: NavService,
    private fg: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    ) { }
    public  loginForm = this.fg.group({
      email: ["", [
        Validators.required,
        Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });

  ngOnInit(): void {
    this.nav.hide();
    this.ftr.hide();
  }

  requiredErrorMessage($feild: string | number) {
    return this.loginForm.controls[$feild].hasError("required")
      ? "You must enter a value"
      : "";
  }

  showPass(){
    this.show = !this.show;
  }
  get f(){
    return this.loginForm.controls;
  }

  login() {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    this.userCredentials = {
      email: email,
      password: password,

    };
    if (this.loginForm.controls.email.invalid) {
      this.toastr.error("Please Enter Valid Email")
    }
    else if (this.loginForm.controls.password.invalid) {
      this.toastr.error("Please Enter Valid password")
    }
    else {
             localStorage.setItem('userdata',  JSON.stringify(this.userCredentials));
            //just for development
            this.toastr.success("you are logged in successfully");
            this.router.navigateByUrl('/');


    }
  }





}
