import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YearsPage } from '../years/years';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items: any = [
    'School of Computing',
    'School of Business',
    'School of Engineering'
  ];

  constructor(public navCtrl: NavController) {

  }

  itemSelected(item) {
    this.navCtrl.push(YearsPage);
  }

}
