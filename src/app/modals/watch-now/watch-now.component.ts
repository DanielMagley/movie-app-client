import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-watch-now",
  templateUrl: "./watch-now.component.html",
  styleUrls: ["./watch-now.component.scss"]
})
export class WatchNowComponent implements OnInit {
  movieData: any;

  constructor() {}

  ngOnInit() {
    this.movieData = JSON.parse(sessionStorage.getItem("movieData"));
    console.log(this.movieData);
  }
}
