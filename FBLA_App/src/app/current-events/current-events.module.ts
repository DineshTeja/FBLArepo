import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
/**import { IonicStorageModule } from '@ionic/storage';*/


import { CurrentEventsPage } from './current-events.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentEventsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    /**IonicStorageModule.forRoot(),*/
  ],
  declarations: [CurrentEventsPage]
})

export class CurrentEventsPageModule {

  
}


