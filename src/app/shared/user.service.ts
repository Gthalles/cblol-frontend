/* eslint-disable no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    // eslint-disable-next-line no-useless-constructor
    constructor (private http: HttpClient)
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    { }

    createUser (user: any)
    {
        this.http.post(`${environment.url}/register-user`, user).subscribe();
    }
}
