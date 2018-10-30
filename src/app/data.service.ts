import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "X-Mashape-Key": "TKgwaijYE1mshNMJv3smzYgaS05Wp12Rwl5jsnYHd9aCAe8SCP"
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
