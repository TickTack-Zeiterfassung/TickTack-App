import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * @Author Marcel
 * @Info RootPage
 * Über diese Klasse kann die Zeit aufgenommen werden.
 */

@IonicPage()
@Component({
  selector: 'page-capture-time',
  templateUrl: 'capture-time.html',
})
export class CaptureTimePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptureTimePage');
  }

}
