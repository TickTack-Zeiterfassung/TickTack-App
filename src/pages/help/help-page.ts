import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * @author Marcel
 * Seite zum Anzeigen aller Hilfestellungen für den Anwender
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help-page.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

}
