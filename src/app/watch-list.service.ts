import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { MAT_DATEPICKER_VALIDATORS } from "../../node_modules/@angular/material";
import { APIURL } from "../environments/environment.prod";

@Injectable({
  providedIn: "root"
})
export class WatchListService {
  authorization = sessionStorage.getItem("token");

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      //'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNTQxMDcyOTI1LCJleHAiOjE1NDExNTkzMjV9.tG93dXhRZm26kdqsc_W1lSkxa-1QYk6Ka8oHglcH95w'
      Authorization: this.authorization
    })
  };

  constructor(private http: HttpClient) {}

  makeList(pictures, urls) {
    // console.log(pictures)
    let urlss = `${APIURL}/yourlist/new`;

    return this.http.post(
      urlss,
      {
        movieImage: pictures,
        url: urls
      },
      this.httpOptions
    );
  }
}
