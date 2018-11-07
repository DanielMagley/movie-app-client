import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { UserPageComponent } from "./user-page/user-page.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthComponent } from "./auth/auth.component";
import { SignupComponent } from "./signup/signup.component";
// import { HomePageComponent } from "./home-page/home-page.component";
import { AuthGuardService as AuthGuard } from "./auth-guard.service";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
  // { path: "", component: HomePageComponent },
  { path: "", component: ProductsPageComponent },
  { path: "user-page", component: UserPageComponent, canActivate: [AuthGuard] },
  { path: "auth", component: AuthComponent },
  { path: "signup", component: SignupComponent },
  { path: "admin", component: AdminComponent },
  { path: "settings", component: SettingsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
