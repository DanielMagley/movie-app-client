import { Component, OnInit } from "@angular/core";
import { PageService } from "../page.service";

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.scss"]
})
export class UserPageComponent implements OnInit {
  returns;
  isClicked: boolean;
  watched = document.getElementsByClassName("img")[0];


  constructor(private service: PageService) {}


  ngOnInit() {
    this.service.getList().subscribe(data => {
      this.returns = data;

      console.log(this.returns);
    });
  }
  deleteItem(id) {
    this.service.delete(id).subscribe(data => {
      console.log(data);
    });
    this.reload();
   // window.location.href = "/user-page";
  }

  updateItem(id, image, url) {
    this.service.update(id, image, url).subscribe(data => {
      this.isClicked = true;
    });
    this.reload();
    //window.location.href = "/user-page";
  }

  reload() {
    window.location.href = "/user-page";
  }

  // deletingItem(id) {
  //   this.service.delete(id).subscribe(data => {
  //     console.log(data);
  //   });
  //   window.location.href = "/user-page";
  // }
}
