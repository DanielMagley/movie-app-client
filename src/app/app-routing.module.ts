import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { UserPageComponent } from "./user-page/user-page.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthComponent } from "./auth/auth.component";
// import { HomePageComponent } from "./home-page/home-page.component";
import { AuthGuardService as AuthGuard } from "./auth-guard.service";

const routes: Routes = [
  // { path: "", component: HomePageComponent },
  { path: "", component: ProductsPageComponent },
  { path: "user-page", component: UserPageComponent, canActivate: [AuthGuard] },
  { path: "auth", component: AuthComponent },
  { path: "admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
