import {Injectable} from '@angular/core';

import { BehaviorSubject, Observable} from 'rxjs';

import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Student } from 'src/shared/models/student';


@Injectable({providedIn: 'root'})
export class HomeService {
  headeroption:any;
  token: any;
  baseUrl=environment.baseUrl


private subject=new BehaviorSubject<Student[]>([]);
students$:Observable<Student[]> =this.subject.asObservable();

  getToken() {
    // this.token = localStorage.getItem('SouqSquareToken');
    this.headeroption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // Authorization: `${this.token}`,
      }),
    };
  }

  constructor(
    private http: HttpClient) {
      this.getToken();

  }


 getStudents(page :number,perPage:number ):Observable<any>{
  this.getToken();
  let params = new HttpParams();
  params = params.append("page", page.toString());
  params = params.append("perPage", perPage.toString());
  // params = params.append("pagination", "true");

  return this.http.get (`${this.baseUrl}?${params}`,this.headeroption)
}
getStudentById(id:number):Observable<any>{
  this.getToken();
  return this.http.get (`${this.baseUrl}/${id}`,this.headeroption)
}


}
