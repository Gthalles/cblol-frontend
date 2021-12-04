import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FormValidationService {

  constructor() { }

  validatePassword(control: FormControl): any {
    let password: string = control.value;

    if(password && password != '') {
      var passwordValidator = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*()+\-.,;?^.,;?><:{}[\]])[\w!@#$%&*()+\-.,;?^.,;?><:{}[\]]{6,22}$/; // Regex para validar senha
      
      return passwordValidator.test(password) ? null : { invalidPassword: true };
    }
  }

  validateEmail(control: FormControl): any {
    let email: string = control.value;

    if(email && email != '') {
      var emailValidator= /^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/; // Regex para validar email

      return emailValidator.test(email) ? null : { invalidEmail: true };
    }
  }

  validateCPF(control: FormControl): any {
    let cpf: string = control.value;

    if(cpf && cpf != '') {
      var documentValidator = /\d{3}\d{3}\d{3}\d{2}$/; //Regex adaptado para validar CPF utilizando ngMask

      return documentValidator.test(cpf) ? null : { invalidCPF: true };
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
      'invalidCPF': `${fieldName} inválido.`,
      'invalidPassword': `${fieldName} inválida.`
    };

    return config[validatorName];
  }
}
