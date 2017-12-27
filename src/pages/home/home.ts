import { PackageDetailsPage } from './../package-details/package-details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openPackageDetailsPage(){
    this.navCtrl.push(PackageDetailsPage);
  }
}
