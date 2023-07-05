import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { LoginComponent } from './login/login.component';
import { OnlyALphabetDirective } from './validationsFolder/only-alphabet.directive';
import { OnlyNumberDirective } from './validationsFolder/only-number.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    LoginComponent,
    OnlyALphabetDirective,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
