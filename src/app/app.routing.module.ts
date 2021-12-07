import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignUpComponent } from "./pages/user-registration/sign-up.component";
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'sign-up',
                component: SignUpComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule
{}
