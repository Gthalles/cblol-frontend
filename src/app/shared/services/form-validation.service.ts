import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FormValidationService {

  constructor() { }

  passwordValidator(control: FormControl): any {
    var password: string = control.value;

    if(password && password != '') {
      // Regex para validar senha
      var validatePassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*()+\-.,;?^.,;?><:{}[\]])[\w!@#$%&*()+\-.,;?^.,;?><:{}[\]]{6,22}$/;
      return validatePassword.test(password) ? null : { invalidPassword: true };
    }
  }

  emailValidator(control: FormControl): any {
    var email: string = control.value;

    if(email && email != '') {
      // Regex para validar email
      var validateEmail = /^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/;
      return validateEmail.test(email) ? null : { invalidEmail: true };
    }
  }

  equalsTo(otherField: string): any {
    const validator: any = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar um campo.');
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      const field: any = (<FormGroup>formControl.root).get(otherField);

      if (!field) {
        throw new Error('É necessário informar um campo válido.');
      }

      if (field.value !== formControl.value) {
        return { equalsTo: otherField };
      }

      return null;
    };

    return validator;
  }

  getErrorMessage(fieldName: string, validatorName: string, validatorValue?: any) {
    const config: any = {
      'UnavailableEmail': `${fieldName} indisponível.`,
      'equalsTo': 'Senhas não são iguais.',
      'pattern': `${fieldName} inválido.`,
      'required': `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'invalidEmail': `${fieldName} inválido.`,
      'invalidPassword': `${fieldName} inválida.`
    };

    return config[validatorName];
  }
}
