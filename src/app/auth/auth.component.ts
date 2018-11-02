import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  signInForm: FormGroup;
  userEmail: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {
    this.authService.signIn(this.userEmail, this.password).subscribe(user => {
      //console.log(user.isAdmin)
      sessionStorage.setItem("token", user.sessionToken);
      sessionStorage.setItem('isAdmin', user.isAdmin ) 
      alert(user.message);
      window.location.href = "/user-page";
    });

    console.log(this.userEmail, this.password);
  }
} 
