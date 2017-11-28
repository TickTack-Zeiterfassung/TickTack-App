import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

/**
 * @Author Marcel
 * Service zum Darstellen auf der Oberfläche
 */

@Injectable()
export class UserInterfaceProvider {

    constructor(private toast: ToastController) {}

    /**
     * Zeigt einen Toast auf der Oberfläche
     * @param {string} message: Anzuzeigende Nachricht
     * @param {number} duration: Dauer des Toasts
     * @param {string} position: Position des Toasts. Mögliche Werte sind 'top', 'bottom', 'middle'
     */
    presentToast(message: string, duration: number = 3000, position: string = 'bottom') {
        let toast = this.toast.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present();
    }

}
