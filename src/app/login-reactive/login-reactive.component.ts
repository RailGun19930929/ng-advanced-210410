import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

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

  form: FormGroup;

  originClass = ''

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.originClass = document.body.className;
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      email: this.fb.control(
        'user2@example.com',
        {
          validators: [
            Validators.required,
            Validators.email,
          ],
          updateOn: 'blur',
        }
      ),
      password: this.fb.control(
        '123ABCabc',
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(32),
          ],
          updateOn: 'change',
        }
      ),
      isRememberMe: true,
      extra: this.fb.array(
        [
          this.makeExtra(),
          this.makeExtra(),
        ]
      ),
    });
  }

  makeExtra() {
    return this.fb.group({
      name: '',
      tel: '',
    })
  }

  ngOnDestroy(): void {
    document.body.className = this.originClass;
  }

  getFormArray(name: string) {
    return this.form.get(name) as FormArray
  }

  addFormArray(name) {
    (this.form.get(name) as FormArray).push(
      this.makeExtra(),
    )
  }

  onSubmit(form: FormGroup) {
    console.log(form);
    if (form.valid) {
      console.log(form.value);
    }
  }

}
