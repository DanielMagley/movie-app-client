import { Component, OnInit } from "@angular/core";
import { PageService } from "../page.service";

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.scss"]
})
export class UserPageComponent implements OnInit {
  returns;
  constructor(private service: PageService) {}

  isClicked = false;

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
    window.location.href = "/user-page";
  }

  updateItem(id, image, url) {
    // console.log(id, image, url)
    this.service.update(id, image, url).subscribe(data => {
      //console.log(data)
      //alert('Marked as watched')
      this.isClicked = true;
    });
  }
}
