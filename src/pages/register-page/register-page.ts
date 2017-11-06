import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {IAuthProvider} from "../../providers/i-auth-provider/i-auth-provider";

/**
 * @author Matthias
 * Seite zum Registrieren eines neuen Nutzers.
 */

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register-page.html',
})
export class RegisterPage {

    email: string;
    password: string;

    constructor(private auth: IAuthProvider,
                public navCtrl: NavController) {
    }

    ionViewWillLoad() {
        console.log('Check auth.');
        if (this.auth.isLoggedIn()) {
            this.navCtrl.setRoot('CaptureTimePage');
        }
    }

    register(): void {
        this.auth.register(this.email, this.password).then(result => {
            if (result) {
                this.navCtrl.setRoot('CaptureTimePage');
            }
        })
    }

}
