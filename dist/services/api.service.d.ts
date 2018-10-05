import { Http } from '@angular/http';
import { Observable } from 'rxjs';
export declare class ApiService {
    private http;
    constructor(http: Http);
    /**
     * Send GET request to given api endpoint
     * @param url
     */
    Get(url: string): Observable<any>;
    /**
     *
     * @param url Send post request to given api endpoint with data
     * @param data
     */
    Post(url: string, data: any): Observable<any>;
    /**
     * Handle errors that arise during api requests
     * @param error
     */
    private handleError;
}
