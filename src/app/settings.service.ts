import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { APIURL } from "../environments/environment.prod";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  authorization = sessionStorage.getItem("token");
  id = sessionStorage.getItem("Id");

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authorization
    })
  };

  getData(first, last, emails, pass) {
    console.log(this.id);
    let url = `${APIURL}/user/update/${this.id}`;
    return this.http.put(
      url,
      {
        firstName: first,
        lastName: last,
        userEmail: emails,
        password: pass
      },
      this.httpOptions
    );
  }

  myDetails() {
    console.log(this.id)
    let url = `${APIURL}/user/${this.id}`;
    return this.http.get(url, this.httpOptions);
  }
}
