import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/authService/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp = new FormGroup({
    email: new FormControl('', [Validators.required]),
    userpassword: new FormControl('', [Validators.required]),
  });

  // signUpForm() {
  //   console.log(this.signUp.value);

  //   this.auth.register(this.signUp.value).subscribe(success => {
  //     console.log("Successfull", success);
  //   },
  //     error => {
  //       console.log("Some error", error);
  //     });
  // }

  signUpForm(){
    console.log(this.signUp.value);    
    this.auth.register(this.signUp.value).subscribe(success => 
      {console.log("Successfull",success)
      this.router.navigate(['/dashboard'])
    },
      error => {console.log("Error",error);
      alert("Invalid Username and Password !")
      })
   }
}

