import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "X-Mashape-Key": "OKhzpzj7AKmshdFaWslnqQOXyEi8p1HFGpojsn6oPjCTq7fbUT"
  })
};

@Injectable({
  providedIn: "root"
})
export class DataService {
  // searchUrl = 'https://utelly-tv-shows-and-movies-availability-v1.p.mashape.com/lookup?country=us&term'

  constructor(private http: HttpClient) {}

  getStuff(text) {
    return this.http.get(
      `https://utelly-tv-shows-and-movies-availability-v1.p.mashape.com/lookup?country=us&term=${text}`,
      httpOptions
    );
  }
}
