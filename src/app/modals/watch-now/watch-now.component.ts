import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-watch-now",
  templateUrl: "./watch-now.component.html",
  styleUrls: ["./watch-now.component.scss"]
})
export class WatchNowComponent implements OnInit {
  movieData: any;
  netflix = "";
  appleTv = "";
  amazon = "";
  local;
  constructor() {}

  ngOnInit() {
    this.movieData = JSON.parse(sessionStorage.getItem("movieData"));
    console.log(this.movieData.locations.display_name);
    this.local = this.movieData.locations;
  }
}
