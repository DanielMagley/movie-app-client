import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { DataService } from "../data.service";
import { WatchListService } from "../watch-list.service";
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
  moreResults;
  moreResultsArr;
  moreItems;
  evenMoreResults;
  evenMoreResultsArr;
  evenMoreItems;
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
    // let subText = text.substring(0, 1);
    let subText = text;
    let superSubText = text.substring(0, 1);

    this.result = this.service.getStuff(text).subscribe(data => {
      this.itemsArr = data;
      this.items = this.itemsArr.results;
      // console.log(this.items);
    });

    this.moreResults = this.service
      .getMoreStuff(subText)
      .subscribe(moreData => {
        this.moreResultsArr = moreData;
        this.moreItems = this.moreResultsArr.results;
        console.log(this.moreItems);
        console.log(subText);
      });

    this.evenMoreResults = this.service
      .getEvenMoreStuff(superSubText)
      .subscribe(evenMoreData => {
        this.evenMoreResultsArr = evenMoreData;
        this.evenMoreItems = this.evenMoreResultsArr.results;
        console.log(this.evenMoreItems);
      });
  }

  watchList(picture) {
    this.services.makeList(picture).subscribe(data => {
      console.log(data);
    });
  }
} 
