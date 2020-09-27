import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { DUMMY_EMAIL } from 'src/app/mockup'

@Component({
 selector: "digio-signin",
 templateUrl: "./signin.component.html",
 styleUrls: ['./signin.component.scss']
})

export class SigninComponent {

    email = DUMMY_EMAIL;
    constructor (private router: Router) {}

    onContinue () {
        this.router.navigate(['/verification'])
    }
}