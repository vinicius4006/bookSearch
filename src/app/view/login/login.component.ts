import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }

  username: string = '';
  password: string = '';


  ngOnInit(): void {
  }

  login(){
    if(this.username != '' && this.password !=''){

    } else {
      console.log('teste');
    }
  }
}
