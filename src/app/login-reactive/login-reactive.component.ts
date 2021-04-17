import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isNationalIdentificationNumberValid } from 'taiwan-id-validator2';

function validateTwid(c: FormControl): ValidationErrors | null {
  if (!c.value) {
    return null;
  }
  const result = isNationalIdentificationNumberValid(c.value);
  if (result) {
    return null
  }
  return {
    twid: true
  }
}

@Component({
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit, OnDestroy {

  data: any = {
    email: 'user2@example.com',
    password: '123ABCabc',
    isRememberMe: true,
    extra: [
      {
        name: '111',
        tel: '222',
        twid: '',
      },
      {
        name: '333',
        tel: '444',
        twid: '',
      },
      {
        name: '555',
        tel: '666',
        twid: '',
      }
    ]
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
        []
      ),
    });

    for (const item of this.data.extra) {
      this.getFormArray('extra').push(this.makeExtra());
    }

    this.form.setValue(this.data);

  }

  getControl(validators?: ValidatorFn[]) {
    const ctl = this.fb.control('');
    if (validators) {
      ctl.setValidators(validators);
    }
    return ctl;
  }

  resetForm() {
    this.getFormArray('extra').clear();
    for (const item of this.data.extra) {
      this.getFormArray('extra').push(this.makeExtra());
    }
    this.form.reset(this.data);
  }

  makeExtra() {
    return this.fb.group({
      name: this.getControl(),
      tel: this.getControl(),
      twid: this.getControl([validateTwid]),
    })
  }

  deleteExtra(index: number) {
    this.getFormArray('extra').removeAt(index);
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
