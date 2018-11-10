import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { APIURL } from "../environments/environment.prod";

@Injectable({
  providedIn: "root"
})
export class PageService {
  constructor(private http: HttpClient) {}
  authorization = sessionStorage.getItem("token");
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authorization
    })
  };

  getList() {
    console.log("This is a test");
    let url = `${APIURL}/yourlist/getmine`;
    return this.http.get(url, this.httpOptions);
  }

  delete(id) {
    let url = `${APIURL}/yourlist/delete/${id}`;
    return this.http.delete(url, this.httpOptions);
  }

  update(id, image, url) {
    console.log(url);
    let urls = `${APIURL}/yourlist/update/${id}`;
    return this.http.put(
      urls,
      {
        movieImage: image,
        url: url,
        isWatched: true
      },
      this.httpOptions
    );
  }
}
