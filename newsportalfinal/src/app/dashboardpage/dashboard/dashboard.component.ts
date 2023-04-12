import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadnewsComponent } from 'src/app/uploadnews/uploadnews/uploadnews.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title="Abhishek";
  totalsession="2.6"+" "+"k"+"+";
  dlcount="+"+"15%"+" "+"Last Month";
  ngOnInit(): void {
  }
  constructor(private router:Router){}

}