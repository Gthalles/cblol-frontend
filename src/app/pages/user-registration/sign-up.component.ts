import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormValidationService } from 'src/app/shared/services/form-validation.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: [ './sign-up.component.css' ]
})
export class SignUpComponent implements OnInit
{
    form!: FormGroup;

    // eslint-disable-next-line no-useless-constructor
    constructor (
    private formBuilder: FormBuilder,
    private validationService: FormValidationService
    )
    // eslint-disable-next-line no-empty-function
    { }

    ngOnInit (): void
    {
        this.form = this.formBuilder.group({
            fullName: [
                null,
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(80)
                ]
            ],
            email: [
                null,
                [
                    Validators.required,
                    Validators.maxLength(120),
                    FormValidationService.validateEmail
                ]
            ],
            document: [
                null,
                [
                    Validators.required,
                    FormValidationService.validateCPF
                ]
            ],
            birthDate: [
                null,
                [ Validators.required ]
            ],
            password: [
                null,
                [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(22),
                    FormValidationService.validatePassword
                ]
            ],
            confirmPassword: [
                null,
                [
                    Validators.required,
                    FormValidationService.equalsTo('password')
                ]
            ],
        });
    }

    static onSubmit (ngForm: Form): Form
    {
        return ngForm;
    }

    getFieldControl (fieldName: string): any
    {
        return this.form.get(fieldName);
    }
}
