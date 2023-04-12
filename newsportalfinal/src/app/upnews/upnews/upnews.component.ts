import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadService } from 'src/app/authService/upload.service';
import { UpnewsService } from 'src/app/authService/upnews.service';

@Component({
  selector: 'app-upnews',
  templateUrl: './upnews.component.html',
  styleUrls: ['./upnews.component.css']
})
export class UpnewsComponent implements OnInit {

  constructor(private uSer:UpnewsService,private router:Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  upNews: any = [];
  getAll() {
    this.uSer.getUpnews().subscribe(
      (success) => {
        console.log('upnews', success);
        let result: any = success;
        this.upNews = result.data;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
  edit(c:any) {
    console.log("edit in",c);
    this.router.navigate(['/login'],{
      queryParams:c}) 
  }
}
