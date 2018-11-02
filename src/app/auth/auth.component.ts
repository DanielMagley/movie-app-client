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
  firstName: string;
  lastName: string;
  signUp = false;

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

  onSignInSubmit() {
    this.authService.signIn(this.userEmail, this.password).subscribe(user => {
      sessionStorage.setItem("token", user.sessionToken);
      sessionStorage.setItem("isAdmin", user.isAdmin);
      alert(user.message);
      window.location.href = "/user-page";
    });
  }
}
