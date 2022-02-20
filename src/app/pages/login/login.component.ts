/* eslint-disable no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';

import { FormValidationService } from 'src/app/shared/services/form-validation.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit
{
    public loginForm!: FormGroup;

    // eslint-disable-next-line no-useless-constructor
    constructor (private formBuilder: FormBuilder)
    {}

    ngOnInit (): void
    {
        this.loginForm = this.formBuilder.group({
            email: [
                null,
                [
                    Validators.required,
                    Validators.maxLength(120),
                    FormValidationService.validateEmail
                ]
            ],
            password: [
                null,
                [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(22),
                    FormValidationService.validatePassword
                ]
            ]
        });
    }

    static onSubmit (ngForm: Form): Form
    {
        return ngForm;
    }

    getFieldControl (fieldName: string): any
    {
        return this.loginForm?.get(fieldName);
    }

    login (credentials: string[]): void
    {
        console.log(credentials);
        this.loginForm.reset();
    }
}
