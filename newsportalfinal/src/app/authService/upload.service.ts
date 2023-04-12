import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http:HttpClient) { }

  upload(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/news/add',data);
  }
  uploadImg(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/newsimage/add',data);
  }}
