import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {IAuthProvider} from "../../providers/i-auth/i-auth";

/**
 * @author Matthias
 *
 * LoginPage
 * Seite zum Login der Nutzer in der App.
 */
@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    email: string;
    password: string;

    constructor(public navCtrl: NavController, private auth: IAuthProvider) {}

    ionViewWillLoad() {
        console.log('Check auth.');
        if(this.auth.isLoggedIn()) {
            this.navCtrl.setRoot('CaptureTimePage');
        }
    }

    login(): void {
        this.auth.login(this.email, this.password).then(
            result => {
                console.log(result);
                if(result) {
                    this.navCtrl.setRoot('CaptureTimePage');
                }
            }
        )
    }

    register(): void {
        this.navCtrl.push('RegisterPage');
    }

}
