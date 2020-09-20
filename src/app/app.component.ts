import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { CommonService } from './shared/service/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild(ToastContainerDirective, {static: true})
  // toastContainer: ToastContainerDirective;

  // constructor(
  //   public commonService: CommonService,
  //   private toastrService: ToastrService
  // ) {}

  // public ngOnInit(): void {
  //   this.toastrService.overlayContainer = this.toastContainer;
  // }
}
