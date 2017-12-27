import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { EnqueuePage } from './../pages/enqueue/enqueue';
import { EnqueueDetailsPage } from './../pages/enqueue-details/enqueue-details';
import { PackageDetailsPage } from './../pages/package-details/package-details';
import { ProfilePage } from '../pages/profile/profile';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUpPage,
    EnqueuePage,
    EnqueueDetailsPage,
    PackageDetailsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignUpPage,
    EnqueuePage,
    EnqueueDetailsPage,
    PackageDetailsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
