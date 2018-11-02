import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { UserSignIn } from "./userSignIn";
import { UserSignUp } from "./userSignUp";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }

  signIn(userEmail, password) {
    let url = "http://localhost:4000/user/signin";
    return this.http.post<UserSignIn>(url, {
      userEmail,
      password
    });
  }
  signUp(firstName, lastName, userEmail, password) {
    let url = "http://localhost:4000/user/signup";
    return this.http.post<UserSignUp>(url, {
      firstName,
      lastName,
      userEmail,
      password
    });
  }
}
