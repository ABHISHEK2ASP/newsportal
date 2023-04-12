import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpnewsService {
  router: any;


  constructor(private http:HttpClient) { }
  getUpnews(){
    const head = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('x-access-token', '' + localStorage.getItem('mytoken'));
    return this.http.get(
      'http://localhost:8080/news/getAll',
      {headers:head}
    );
  }


  
}
