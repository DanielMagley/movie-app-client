import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { DataService } from "../data.service";
import { of } from "rxjs";

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
  constructor(private service: DataService) {}

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
}
