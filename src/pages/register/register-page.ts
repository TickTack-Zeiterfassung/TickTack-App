import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { IAuthProvider } from "../../providers/i-auth-provider";

/**
 * @author Matthias
 * Seite zum Registrieren eines neuen Nutzers.
 */

@IonicPage({
    segment: 'register'
})
@Component({
    selector: 'page-register',
    templateUrl: 'register-page.html',
})
export class RegisterPage {

    email: string;
    password: string;

    constructor(private auth: IAuthProvider,
                public navCtrl: NavController,
                private menu: MenuController) {
    }

    ionViewDidEnter() {
        this.menu.enable(false);
    }

    ionViewWillLeave() {
        this.menu.enable(true);
    }

    ionViewWillLoad() {

        this.auth.isLoggedIn().then(loggedIn => {
            if(loggedIn) {
                this.navCtrl.setRoot('CaptureTimePage');
            }
        });
    }

    register(): void {
        this.auth.register(this.email, this.password).then(loggedIn => {
            if (loggedIn) {
                this.navCtrl.setRoot('CaptureTimePage');
            }
        })
    }

}
