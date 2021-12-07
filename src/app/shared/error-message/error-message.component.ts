import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidationService } from '../services/form-validation.service';

@Component({
    selector: 'app-error-message',
    templateUrl: './error-message.component.html',
    styleUrls: [ './error-message.component.css' ]
})
export class ErrorMessageComponent
{
  @Input() label = "";

  @Input() control: FormControl = new FormControl();


  get errorMessage ()
  {
      // This.control.get('name')
      for (const propertyName in this.control?.errors)
      {
          if (this.control?.getError(propertyName) && this.control?.touched)
          {
              // eslint-disable-next-line max-len
              const errorMessage = FormValidationService.getErrorMessage(this.label, propertyName, this.control?.errors[propertyName]);

              return errorMessage;
          }
      }

      return null;
  }

}
