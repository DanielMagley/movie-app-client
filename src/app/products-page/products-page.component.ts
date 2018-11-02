import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { DataService } from "../data.service";
import { WatchListService } from "../watch-list.service"
import { of } from "rxjs";
import { MAT_DATEPICKER_VALIDATORS } from "../../../node_modules/@angular/material";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.scss"]
})
export class ProductsPageComponent {
  form = new FormGroup({
    input: new FormControl("")
  });
  locationArr;
  result;
  addOne;
  items;
  itemsArr;
  constructor(
    private service: DataService,
    private services: WatchListService
  ) {}

  ngOnInit() {}

  onSubmit() {
    let text = this.form.value.input;
    // let cat = this.form.value.categories;
    this.result = this.service.getStuff(text).subscribe(data => {
      this.itemsArr = data;
      this.items = this.itemsArr.results;

      // console.log(this.locationArr);

      console.log(this.items);
    });
  }

  watchList(picture) {
    this.services.makeList(picture)
    .subscribe(data => {
      console.log(data)
    })
  }
} 
