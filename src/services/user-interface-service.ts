import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AlertController, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * @Author Marcel
 * Service zum Darstellen auf der Oberfläche
 */

@Injectable()
export class UserInterfaceProvider {

    constructor(private toast: ToastController,
                private alertCtrl: AlertController,
                private translate: TranslateService
    ) {}

    /**
     * Zeigt einen Toast auf der Oberfläche und übersetzt die übergebene Nachricht
     * @param {string} message: Anzuzeigende Nachricht als Übersetzungsschlüssel
     * @param {number} duration: Dauer des Toasts
     * @param {string} position: Position des Toasts. Mögliche Werte sind 'top', 'bottom', 'middle'
     */
    presentToast(message: string, duration: number = 3000, position: string = 'bottom') {
        let toast = this.toast.create({
            message: this.translate.instant(message),
            duration: duration,
            position: position
        });
        toast.present();
    }

    showConfirm(title: string, message: string): Promise<boolean> {
        return new Promise((resolve) => {

            let confirm = this.alertCtrl.create({
                title: this.translate.instant(title),
                message: this.translate.instant(message),
                buttons: [
                    {
                        text: this.translate.instant('button.disagree'),
                        handler: () => {
                            resolve(false);
                        }
                    },
                    {
                        text: this.translate.instant('button.agree'),
                        handler: () => {
                            resolve(true);
                        }
                    }
                ]
            });
            confirm.present();

        });
    }

}
