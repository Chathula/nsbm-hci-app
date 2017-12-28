import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

import { SubjectsService } from '../../services/subjects/subjects';
import { TablePage } from '../table/table';

@Component({
  selector: 'page-subjects',
  templateUrl: 'subjects.html'
})
export class SubjectsPage {

  public subjects:any;
  public listedSubjects:any;

  constructor(public navCtrl: NavController, subjectsService: SubjectsService, private storage: Storage, private toastCtrl: ToastController) {
    this.subjects = subjectsService.getSubjects();

    this.storage.get('listed').then((val) => {
      if (val == null) {
        this.listedSubjects = [];
      } else {
        this.listedSubjects = JSON.parse(val);        
      }
    });
  }

  subjectSelected(subject) {
    this.navCtrl.push(TablePage, { subject });
  }

  addToList(id) {
    let listed = [];

    this.storage.get('listed').then((val) => {
      if (val == null) {
        listed.push(id);
        this.storage.set('listed', JSON.stringify(listed));
        let tosted = this.toastCtrl.create({
          message: 'Item Listed successfully',
          duration: 3000,
          position: 'bottom'
        });

        tosted.present();

      } else {
        val = JSON.parse(val);
        if (!val.includes(id)) {
          val.push(id);
          let tosted = this.toastCtrl.create({
            message: 'Item Listed successfully',
            duration: 3000,
            position: 'bottom'
          });

          tosted.present();
        } else {
          const i = val.indexOf(id);
          if(i != -1) {
            val.splice(i, 1);
          }
          let tosted = this.toastCtrl.create({
            message: 'Listed item removed successfully',
            duration: 3000,
            position: 'bottom'
          });
  
          tosted.present();
        }
        this.storage.set('listed', JSON.stringify(val));
        this.listedSubjects = val;
      } 

    });
  }

  checkListed(id) {
    if (this.listedSubjects != null && this.listedSubjects.includes(id)) {
      return true;
    }

    return false;
  }

}
