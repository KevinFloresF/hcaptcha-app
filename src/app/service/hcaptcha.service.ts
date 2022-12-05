
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HcaptchaService {
  public isBrowser  = false;
 
  constructor(private http: HttpClient) {
    // if (isPlatformBrowser(platformId)) {
    //   this.isBrowser = true;
    // }
  }
   getToken(token: string):  Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };

      return this.http.post<any>( 'api/signup?h-captcha-response=' + token ,httpOptions)
        .pipe(
          map((response) => response
          ),
          catchError((err) => {
            console.log('error caught in service')
            console.error(err);
            return throwError(err);
          })
        );       
 
  }
 
}