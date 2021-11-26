import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

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
    private validationService: FormValidationService
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      email: [null, [Validators.required, Validators.maxLength(120), this.validationService.validateEmail], this.checkEmailUniqueness.bind(this)],
      document: [null, [Validators.required, this.validationService.validateCPF]],
      birthDate: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(22), this.validationService.validatePassword]],
      confirmPassword: [null, [Validators.required, this.validationService.equalsTo('password')]],
    });
  }

  onSubmit(ngForm: any) {
    console.log('Submitted: ', ngForm);
  }

  getFieldControl(fieldName: string): any {
    return this.form.get(fieldName);
  }

  // Método para verificar existencia do email de forma assíncrona
  checkEmailUniqueness(email: FormControl): any {
    const result: any = this.validationService.getExistingEmails(email.value).pipe(
      map((exist: any) => exist ? { UnavailableEmail: true } : console.log('email disponível!'))
    );

    return result;
  }
}
