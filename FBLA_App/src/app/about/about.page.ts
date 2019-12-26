import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  video: any = {
    url: 'https://youtu.be/BHQYS7ZKlE8',
    title: 'Connect with FBLA! Join Today'
  };


  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }


}
