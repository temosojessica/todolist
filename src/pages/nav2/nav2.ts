import { PEOPLE } from './../../mocks/items.mocks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Nav2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nav2',
  templateUrl: 'nav2.html',
})
export class Nav2Page {

Peoplelist = PEOPLE;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.name = this.navParams.get("variables")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nav2Page');
  }

  add(){
    this.navCtrl.push("DisplayPage");
  }

}
