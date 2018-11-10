import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  userEmail: string;
  password: string;
  firstName: string;
  lastName: string;
  signUp = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSignUpSubmit() {
    this.authService
      .signUp(this.firstName, this.lastName, this.userEmail, this.password)
      .subscribe(user => {
        sessionStorage.setItem("token", user.sessionToken);
        sessionStorage.setItem('isAdmin', user.isAdmin )
        sessionStorage.setItem('Id', user.id)
        alert(user.message);
        window.location.href = "/user-page";
      });
  }
}
