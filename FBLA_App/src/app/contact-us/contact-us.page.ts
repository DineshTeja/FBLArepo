import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  constructor(public navCtrl: NavController) { }


  openInstagram() {
    window.open("https://www.instagram.com/bentonvillefbla/?hl=en", '_system', 'location=yes');
  }

  openFacebook() {
    window.open("https://www.facebook.com/Arkansas-FBLA-District-VII-893194770841828/", '_system', 'location=yes');
  }

  openTwitter() {
    window.open("https://twitter.com/arkansas_fbla",'_system', 'location=yes')

  }

  openDistrictWeb() {
    window.open("http://ardistrict7.weebly.com/",'_system', 'location=yes')
  }

  ngOnInit() {
  }

  openNewsletter() {
    window.open("http://ardistrict7.weebly.com/uploads/2/3/7/8/23787024/fbla_2019_newsletter.pdf", '_system', 'location=yes')
  }

  openWebsiteAR() {
    window.open("http://ardistrict7.weebly.com/", '_system', 'location=yes')
  }



}
