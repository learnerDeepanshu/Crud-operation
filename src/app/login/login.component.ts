import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  deepanshu!: FormGroup;
  constructor(){

  }


  // tyagiakash577@gmail.com

  ngOnInit(): void {
  this.deepanshu = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  }



  login(){
    console.log(this.deepanshu.value);
    var abc='akash@gmail.com';
 
    var data=
    {
    "email":abc
    }
    console.log(data);
    
    
  }

  akash(event:any){
  console.log(event.target.value);
  alert('ckeee');

  
  }


}
