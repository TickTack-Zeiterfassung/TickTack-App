import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { IAuthProvider } from "../../providers/i-auth-provider";

/**
 * @author Matthias
 * Seite zum Login der Nutzer in der App.
 */
@IonicPage({
    segment: 'login'
})
@Component({
    selector: 'page-login',
    templateUrl: 'login-page.html',
})
export class LoginPage {

    email: string;
    password: string;

    constructor(public navCtrl: NavController,
                private auth: IAuthProvider,
                private menu: MenuController) {
    }

    ionViewDidEnter() {
        this.menu.enable(false);
    }

    ionViewWillLeave() {
        this.menu.enable(true);
    }

    ionViewWillLoad() {

        this.auth.isLoggedIn().then((loggedIn: boolean) => {
            if (loggedIn) {
                this.navCtrl.setRoot('CaptureTimePage');
            }
        });
    }

    login(): void {
        this.auth.login(this.email, this.password).then(
            loggedIn => {
                if (loggedIn) {
                    this.navCtrl.setRoot('CaptureTimePage');
                }
            }
        )
    }

    register(): void {
        this.navCtrl.push('RegisterPage');
    }

}
