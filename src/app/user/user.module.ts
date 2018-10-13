import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

import { userRoutes } from './userRoutes';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ]
})

export class UserModule {
}

