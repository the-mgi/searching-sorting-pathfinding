import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    email = '';
    password = '';
    private isUsernameGood: boolean;
    private isPasswordGood: boolean;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
    }

    verifyUsername(): boolean {
        return true;
    }

    verifyPassword(): boolean {
        return true;
    }

    submitForm(emailInput: HTMLInputElement, passwordInput: HTMLInputElement): void {
        console.log(`Username is": ${emailInput.value}\n and the password is: ${passwordInput.value}`);
        this.router.navigate(['home/main'], {relativeTo: this.activatedRoute});
        // this.authService.SignUp(emailInput.value, passwordInput.value);
    }

    myFacebook(): void {
        window.open('https://www.facebook.com/profile.php?id=100006175666418&viewas=100000686899395', '_blank');
    }

    myTwitter(): void {
        window.open('https://twitter.com/usama78941', '_blank');

    }

    myGithub(): void {
        window.open('https://github.com/the-mgi', '_blank');
    }


}
