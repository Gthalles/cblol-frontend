import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FormValidationService } from './services/form-validation.service';

@NgModule({
    declarations: [ ErrorMessageComponent ],
    imports: [ CommonModule ],
    exports: [ ErrorMessageComponent ],
    providers: [ FormValidationService ]
})
export class SharedModule
{}
