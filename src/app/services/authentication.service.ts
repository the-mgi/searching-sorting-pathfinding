import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    // userData: Observable<firebase.User>;

    constructor() {
        // this.userData = angularFireAuth.authState;
    }

    // /* Sign up */
    // SignUp(email: string, password: string): void {
    //     this.angularFireAuth
    //         .auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then(res => {
    //             console.log('You are Successfully signed up!', res);
    //         })
    //         .catch(error => {
    //             console.log('Something is wrong:', error.message);
    //         });
    // }
    //
    // /* Sign in */
    // SignIn(email: string, password: string): void {
    //     this.angularFireAuth
    //         .auth
    //         .signInWithEmailAndPassword(email, password)
    //         .then(res => {
    //             console.log('You are Successfully logged in!');
    //         })
    //         .catch(err => {
    //             console.log('Something is wrong:', err.message);
    //         });
    // }
    //
    // /* Sign out */
    // SignOut(): void {
    //     this.angularFireAuth
    //         .auth
    //         .signOut();
    // }
}
