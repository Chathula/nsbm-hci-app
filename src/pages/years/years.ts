import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubjectsPage } from '../subjects/subjects';

@Component({
  selector: 'page-years',
  templateUrl: 'years.html'
})
export class YearsPage {

  public years: any = [
    'Year 0',
    'Year 1',
    'Year 2',
    'Year 3',
    'Year 4'
  ];

  constructor(public navCtrl: NavController) {

  }

  yearSelected(year) {
    console.log(year);
    this.navCtrl.push(SubjectsPage);
  }

}
