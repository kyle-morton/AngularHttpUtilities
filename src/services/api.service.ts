import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class ApiService {

  constructor(private http: Http) {}

  /**
   * Send GET request to given api endpoint
   * @param url 
   */
  public Get(url: string) : Observable<any> {
    return this.http
    .get(url)
    .pipe(map(response => {

      var json = response.json();
      return json;

    }))
    .pipe(catchError(this.handleError));
  }

  /**
   * 
   * @param url Send post request to given api endpoint with data
   * @param data 
   */
  public Post(url: string, data: any) : Observable<any> {
    return this.http
    .post(url, data)
    .pipe(catchError(this.handleError));
  }

  /**
   * Handle errors that arise during api requests
   * @param error 
   */
  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(error);
  }
  
}
