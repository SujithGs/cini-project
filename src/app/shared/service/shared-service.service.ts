import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { LoginModel, RegisterModel, ResponseBody } from '../model/shared.model';

import { catchError } from 'rxjs/operators';
import { HttpClientService } from './http-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http: HttpClientService) { }

  public login(data: LoginModel): Observable<HttpResponse<ResponseBody<string>>> {
    const url = environment.BASE_URL + 'login';
    return this.http.post(url, data)
      .pipe(catchError((error) => throwError(error)));
  }

  public register(data: RegisterModel): Observable<HttpResponse<ResponseBody<string>>> {
    const url = environment.BASE_URL + 'register';
    return this.http.post(url, data)
      .pipe(catchError((error) => throwError(error)));
  }

  public changePassword(data: RegisterModel): Observable<HttpResponse<ResponseBody<string>>> {
    const url = environment.BASE_URL + 'forgot-password';
    return this.http.post(url, data)
      .pipe(catchError((error) => throwError(error)));
  }

  public getMovieList(): Observable<HttpResponse<any>> {
    const url = environment.MOVIE_URL;
    return this.http.get(url)
      .pipe(catchError((error) => throwError(error)));
  }
}
