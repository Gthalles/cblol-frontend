import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { SignUpComponent } from './user-registration/sign-up.component';
import { LoginComponent } from './login/login.component';


const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    HomeComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    SharedModule
  ],
  exports: [
    HomeComponent,
    SignUpComponent,
    LoginComponent
  ]
})
export class PagesModule { }
