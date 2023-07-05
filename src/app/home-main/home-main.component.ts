import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  akash!:FormGroup;
  submitted: any;
   f: any;
  

  constructor(private title:Title){
    this.title.setTitle("homepage")
  }

  ngOnInit(): void {
  
    this.akash=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required, Validators.email]),
      phone: new FormControl(""),
    })
  }

  onclick(){
    if (!this.akash.valid) {
      this.akash.markAllAsTouched();
      return;
    }
    console.log('Passed validation and submitted');
  }

  getError(formControlName: string, validatorName: string): string {
    return this.determineErroMessage(formControlName, validatorName);
  }

  private determineErroMessage(
    formControlName: string,
    validatorName: string
  ): string {
    switch (formControlName) {
      case 'email':
        return 'You must enter a valid email';
      default:
        return 'You must enter a value';
    }
  
    
    console.log(this.akash.value);
  }

}
