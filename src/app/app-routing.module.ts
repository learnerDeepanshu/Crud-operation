import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HomeMainComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeMainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
