import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YearsPage } from '../years/years';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items: any = [
    'SCHOOL OF COMPUTING',
    'SCHOOL OF BUSINESS',
    'SCHOOL OF ENGINEERING'
  ];

  constructor(public navCtrl: NavController) {
    
  }

  itemSelected(item) {
    this.navCtrl.push(YearsPage);
  }

}
