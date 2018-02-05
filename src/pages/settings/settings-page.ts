import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * @author Marcel
 * Seite zum Bearbeiten der Einstellungen
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings-page.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
