import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {


  data: any = {
    email: '',
    password: '',
    isRememberMe: true,
  }

  originClass = ''

  constructor() { }

  ngOnInit(): void {
    this.originClass = document.body.className;
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = this.originClass;
  }

}
