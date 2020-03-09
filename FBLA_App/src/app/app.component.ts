import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'About FBLA',
      url: '/about',
      icon: 'menu'
    },
    {
      title: 'Meet the Team',
      url: '/meet-us',
      icon: 'menu'
    },
    {
      title: 'FBLA Competitive Events',
      url: '/fbla-competitive-events',
      icon: 'menu'
    },
    {
      title: 'Local Chapter Attendance',
      url: '/current-events',
      icon: 'menu'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'menu'
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: 'menu'
    },
    {
      title: 'Terms of Use',
      url: '/terms-of-use',
      icon: 'menu'
    }
  ];

  public LoginPage = [
    {
      title: 'Login/Register',
      url: '/login',
      icon: 'person'
    }
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
