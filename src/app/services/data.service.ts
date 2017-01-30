import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getTypeOfParam(): Observable<any>{
    return this.http.get('api/get-type').map(res => res.json());
  }
  // fetch(data): Observable<any>
  // {
  //   return this.http.post('api/find', JSON.stringify(data));
  // }
}