import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'
import { FblaSignUpPage } from '../fbla-sign-up/fbla-sign-up.page';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router) {
    
  }

  openWebsite() {
    window.open("https://www.fbla-pbl.org/",'_system', 'location=yes');
  }

  openInstagram() {
    window.open("https://www.instagram.com/bentonvillefbla/?hl=en", '_system', 'location=yes');
  }

  openFacebook() {
    window.open("https://www.facebook.com/Arkansas-FBLA-District-VII-893194770841828/", '_system', 'location=yes');
  }

  openTwitter() {
    window.open("https://twitter.com/arkansas_fbla",'_system', 'location=yes')
  }

  joinFbla() {
    this.router.navigateByUrl('..src/app/fbla-sign-up')
  }

}

