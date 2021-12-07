import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './user-registration/sign-up.component';
import { SharedModule } from 'src/app/shared/shared.module';

// eslint-disable-next-line func-style
const maskConfigFunction: () => Partial<IConfig> = () =>
{
    const result = { validation: false };

    return result;
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
export class PagesModule
{ }
