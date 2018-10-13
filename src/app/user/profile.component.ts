import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgSwitch } from '@angular/common';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
    profileForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {}

    ngOnInit() {
        if (this.auth.isAuthenticated()) {
            this.profileForm = this.formBuilder.group({
                firstName: [this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]],
                lastName: [this.auth.currentUser.lastName, Validators.required]
            });
        } else {
            this.router.navigate(['/user/login']);
        }
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.router.navigate(['/events']);
        }
    }

    isFormValid(controlName: string ): boolean {
        let isValid = false;
        switch (controlName) {
            case 'firstName': {
                isValid = this.profileForm.controls.firstName.valid ||
                this.profileForm.controls.firstName.untouched;
                console.log('firstname validation');
                break; }
            case 'lastName': {
                isValid = this.profileForm.controls.lastName.valid &&
                this.profileForm.controls.lastName.untouched;
                break; }
            default: { break; }
        }
        return isValid;
    }



    onCancel() {
        this.router.navigate(['/events']);
    }
}

