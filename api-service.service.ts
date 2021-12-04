import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public dataObsevable: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  public getApiBaseUrl(path) {
    return `https://api.mercadolibre.com/sites/MCO/${path}`
  }

  public getHttpHeaders() {
    return new HttpHeaders({
      'Access-Control-Allow-Headers': '*',
    });
  } 
  constructor(private http: HttpClient) { }

  public search(searchValues): Observable<any> {
    // const httpParams = new HttpParams({ fromObject: searchParams });
    // const request: HttpRequest<any> = new HttpRequest<any>(
    //   'GET',
    //   this.getApiBaseUrl(path),
    //   { headers: this.getHttpHeaders(), params: httpParams }
    // );

    // return request;
    return this.http.get(`${this.getApiBaseUrl("search")}?q=${searchValues}`)
  }
}
