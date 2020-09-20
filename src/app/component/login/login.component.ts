import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel, ResponseBody } from 'src/app/shared/model/shared.model';
import { CommonService } from 'src/app/shared/service/common-service.service';
import { SharedServiceService } from 'src/app/shared/service/shared-service.service';

/** Error when invalid, control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && (control.dirty || control.touched || isSubmitted) && control.invalid);
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public matcher: MyErrorStateMatcher;

  constructor(private fb: FormBuilder, private router: Router, private commonService: CommonService,
    private sharedService: SharedServiceService, private toastr: ToastrService) {
    this.matcher = new MyErrorStateMatcher();
  }

  ngOnInit() {
    this.initForm();
  }

  public initForm(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    });
  }

  public onSubmit(): void {
    this.commonService.setLoadingTrue();
    const fv = this.loginForm.value;
    const data: LoginModel = new LoginModel(fv.email, window.btoa(fv.password));
    this.sharedService.login(data)
      .subscribe(
        (response: HttpResponse<ResponseBody<any>>) => {
          if (response.body.code === 2000) {
            this.toastr.success('login successfull');
            this.router.navigateByUrl('/home');
          }
        },
        (error: HttpErrorResponse) => {
          this.toastr.error('Invalid Email/Pasword. Please try again.');
          this.commonService.resetLoading();
        },
        () => {
          this.commonService.resetLoading();
        }
      );
  }
}
