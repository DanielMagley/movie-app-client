import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataService } from "./data.service";

//--------Components-----------
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { UserPageComponent } from "./user-page/user-page.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsPageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
