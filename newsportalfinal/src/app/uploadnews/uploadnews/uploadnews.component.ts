import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/authService/auth-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UploadService } from 'src/app/authService/upload.service';

@Component({
  selector: 'app-uploadnews',
  templateUrl: './uploadnews.component.html',
  styleUrls: ['./uploadnews.component.css']
})
export class UploadnewsComponent implements OnInit {
  uploadnews = new FormGroup({
    sectionId: new FormControl('', [Validators.required]),
    videourl: new FormControl(''),
    content: new FormControl(''),
  })
  uplaodnew() {
    console.log(this.uploadnews.value);
  }
  uploadImage = new FormGroup({
    imgUrl: new FormControl('', [Validators.required]),
    newsId: new FormControl('', [Validators.required]),
  })
  uplaodImg() {
    console.log(this.uploadImage.value);
  }
  ngOnInit(): void {
  }


  constructor(private User: UploadService,
    private router: Router,
    private actRoute: ActivatedRoute) { }

    add() {
      console.log(this.uploadnews.value);
      var body ={
        "sectionDTO":{
          "id":this.uploadnews.value.sectionId
        },
        "videourl": this.uploadnews.value.videourl,
        "content": this.uploadnews.value.content
      
      }
      console.log(body);
      
      this.User.upload(body).subscribe(success => {
        console.log("Successfull", success);
        this.router.navigate(['/login'])
      },
        error => {
          console.log("Error", error);
        })
    }
    addImage() {
      console.log(this.uploadImage.value);
      this.User.uploadImg(this.uploadImage.value).subscribe(success => {
        console.log("Successfull", success);
        this.router.navigate(['/login'])
      },
        error => {
          console.log("Error", error);
        })
    }

}
