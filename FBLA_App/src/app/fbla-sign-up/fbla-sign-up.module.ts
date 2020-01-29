import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FblaSignUpPage } from './fbla-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: FblaSignUpPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FblaSignUpPage]
})
export class FblaSignUpPageModule {}
