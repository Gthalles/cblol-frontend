import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidationService } from '../services/form-validation.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  @Input() label: string = "";
  @Input() control: FormControl = new FormControl();

  constructor(private formValidationService: FormValidationService) { }

  ngOnInit(): void {}

  get errorMessage(): any {
    //this.control.get('name')
    for(let propertyName in this.control?.errors) {
      if(this.control?.getError(propertyName) && this.control?.touched) {
        return this.formValidationService.getErrorMessage(this.label, propertyName, this.control?.errors[propertyName]);
      }
    }
    return null;
  }

}
