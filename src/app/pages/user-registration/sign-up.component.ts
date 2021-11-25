import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormValidationService } from 'src/app/shared/services/form-validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formValidationService: FormValidationService
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      email: [null, [Validators.maxLength(120), this.formValidationService.emailValidator]],
      document: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(22), this.formValidationService.passwordValidator]],
      confirmPassword: [null, [Validators.required, this.formValidationService.equalsTo('password')]],
    });
  }

  onSubmit() {}

  register() {
    console.log(this.form);
  }

  getFieldControl(fieldName: string): any {
    return this.form.get(fieldName);
  }
}
