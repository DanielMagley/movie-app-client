import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataService } from "./data.service";
import { JwtModule } from "@auth0/angular-jwt";
import { MatDialogModule } from "@angular/material";

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
import { SignupComponent } from "./signup/signup.component";
import { WatchListService } from "./watch-list.service";
import { PageService } from "./page.service";
import { AdminService } from "./admin.service";
import { SettingsComponent } from "./settings/settings.component";
import { WatchNowComponent } from "./modals/watch-now/watch-now.component";

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
    HomePageComponent,
    SignupComponent,
    SettingsComponent,
    WatchNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [
    DataService,
    AuthService,
    AuthGuardService,
    WatchListService,
    PageService,
    AdminService
  ],
  bootstrap: [AppComponent],
  entryComponents: [WatchNowComponent]
})
export class AppModule {}
