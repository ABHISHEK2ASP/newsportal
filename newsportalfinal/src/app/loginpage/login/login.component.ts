import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { AuthServiceService } from 'src/app/authService/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
  });
  constructor(private auth:AuthServiceService,private router:Router){}
  ngOnInit(){
  
  }
  login(){
    console.log(this.loginForm.value);
    
    this.auth.login(this.loginForm.value).subscribe(success => 
      {console.log("Successfull",success)
  
      let result:any = success;
      localStorage.setItem('userId',result.id)
      localStorage.setItem('mytoken',result.token)
      this.router.navigate(['/dashboard'])
    },
      error => {console.log("Error",error);
      alert("Invalid Username and Password !")
      })
   }
  
}
