import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnqueueDetailsPage } from './enqueue-details';

@NgModule({
  declarations: [
    EnqueueDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EnqueueDetailsPage),
  ],
})
export class EnqueueDetailsPageModule {}
