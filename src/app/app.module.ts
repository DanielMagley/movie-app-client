import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataService } from "./data.service";
import { JwtModule } from "@auth0/angular-jwt";

//--------Components-----------
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { UserPageComponent } from "./user-page/user-page.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthComponent } from "./auth/auth.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { AuthService } from "./auth.service";
import { AuthGuardService } from "./auth-guard.service";

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsPageComponent,
    UserPageComponent,
    AdminComponent,
    AuthComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [DataService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
