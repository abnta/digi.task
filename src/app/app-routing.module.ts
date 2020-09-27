import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "signin",
    loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: "verification",
    loadChildren: () => import("./pages/verification/verification.module").then(m => m.VerificationModule)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: '/signin'
  },
  {
    path: "**",
    redirectTo: '/signin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
