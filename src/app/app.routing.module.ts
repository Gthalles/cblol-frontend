import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { UserRegistrationComponent } from "./pages/users/user-registration/user-registration.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'user-registration',
                component: UserRegistrationComponent
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
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }