import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http:HttpClient) { }
  login(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/login',data);
  }
  register(data:any):Observable<any>{
    const head = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('x-access-token', '' + localStorage.getItem('mytoken'));
      return this.http.post(
        'http://localhost:8080/user/add',data,
      {headers:head});
  }
  

}
