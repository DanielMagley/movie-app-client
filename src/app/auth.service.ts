import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { UserSignIn } from "./userSignIn";

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
}
