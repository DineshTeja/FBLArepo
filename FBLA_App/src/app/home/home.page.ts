import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public navCtrl: NavController) {
    
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

}

