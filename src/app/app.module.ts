import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { YearsPage } from '../pages/years/years';
import { SubjectsPage } from '../pages/subjects/subjects';
import { TablePage } from '../pages/table/table';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SubjectsService } from '../services/subjects/subjects';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    HomePage,
    TabsPage,
    YearsPage,
    SubjectsPage,
    TablePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    HomePage,
    TabsPage,
    YearsPage,
    SubjectsPage,
    TablePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SubjectsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
