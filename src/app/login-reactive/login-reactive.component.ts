import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit, OnDestroy {

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

  onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      console.log(form.value);
    }
  }

}
