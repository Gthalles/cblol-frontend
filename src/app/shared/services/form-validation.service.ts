import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FormValidationService
{
    static validatePassword (control: FormControl)
    {
        const password: string = control.value;

        if (password && password !== '')
        {
            // eslint-disable-next-line max-len
            const passwordValidator = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*()+\-.,;?^.,;?><:{}[\]])[\w!@#$%&*()+\-.,;?^.,;?><:{}[\]]{6,22}$/;

            return passwordValidator.test(password) ? null : { invalidPassword: true };
        }

        return null;
    }

    static validateEmail (control: FormControl)
    {
        const email: string = control.value;

        if (email && email !== '')
        {
            // eslint-disable-next-line prefer-named-capture-group
            const emailValidator = /^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/;

            return emailValidator.test(email) ? null : { invalidEmail: true };
        }

        return null;
    }

    static validateCPF (control: FormControl)
    {
        const cpf: string = control.value;

        if (cpf && cpf !== '')
        {
            // Regex adaptado para validar CPF utilizando ngMask
            const documentValidator = /\d{3}\d{3}\d{3}\d{2}$/;

            return documentValidator.test(cpf) ? null : { invalidCPF: true };
        }

        return null;
    }

    static equalsTo (otherField: string)
    {
        // eslint-disable-next-line func-style
        const validator = (formControl: FormControl) =>
        {
            if (otherField === null)
            {
                throw new Error('É necessário informar um campo.');
            }

            if (!formControl.root || !(<FormGroup>formControl.root).controls)
            {
                return null;
            }

            const field = (<FormGroup>formControl.root).get(otherField);

            if (!field)
            {
                throw new Error('É necessário informar um campo válido.');
            }

            if (field.value !== formControl.value)
            {
                return { equalsTo: otherField };
            }

            return null;
        };

        return validator;
    }

    static getErrorMessage (fieldName: string, validatorName: string, validatorValue?: any)
    {
        const config: any = {
            'UnavailableEmail': `${fieldName} indisponível.`,
            'equalsTo': 'Senhas não são iguais.',
            'pattern': `${fieldName} inválido.`,
            'required': `${fieldName} é obrigatório.`,
            'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
            'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
            'invalidEmail': `${fieldName} inválido.`,
            'invalidCPF': `${fieldName} inválido.`,
            'invalidPassword': `${fieldName} inválida.`
        };

        return config[validatorName];
    }
}
