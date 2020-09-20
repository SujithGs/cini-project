import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared/service/shared-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public list: any;
  public loading: boolean;

  constructor(private sharedService: SharedServiceService) { 
    this.loading = true;
  }

  ngOnInit() {
    this.sharedService.getMovieList().subscribe((data: any) => {
      this.loading = false;
      this.list = data.body.results;
    });
  }
}
