import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    userName: string;
    password: string;
    mouseoverLogin;

    constructor(private authService: AuthService, private router: Router) {
    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['events']);
    }

    onCancel() {
        this.router.navigate(['events']);
    }

}

