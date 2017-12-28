import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

import { SubjectsService } from '../../services/subjects/subjects';
import { TablePage } from '../table/table';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

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

  checkListed(id) {
    if (this.listedSubjects != null && this.listedSubjects.includes(id)) {
      return true;
    }

    return false;
  }

  removeItem(id) {    
    this.storage.get('listed').then((val) => {      
      if (val != null) {
        val = JSON.parse(val);        
        const i = val.indexOf(id);
        if(i != -1) {
          val.splice(i, 1);
        }

        this.storage.set('listed', JSON.stringify(val));
        this.listedSubjects = val;
        let tosted = this.toastCtrl.create({
          message: 'Listed item removed successfully',
          duration: 3000,
          position: 'bottom'
        });

        tosted.present();
      } 
    });
  }

  doRefresh(refresher) {
    this.storage.get('listed').then((val) => {
      if (val == null) {
        this.listedSubjects = [];
        refresher.complete();
      } else {
        this.listedSubjects = JSON.parse(val);   
        refresher.complete();     
      }
    });
  }

  subjectSelected(subject) {
    this.navCtrl.push(TablePage, { subject });
  }

}
