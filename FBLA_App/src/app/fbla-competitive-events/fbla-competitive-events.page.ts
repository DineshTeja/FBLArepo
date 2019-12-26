import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-fbla-competitive-events',
  templateUrl: './fbla-competitive-events.page.html',
  styleUrls: ['./fbla-competitive-events.page.scss'],
})
export class FBLACompetitiveEventsPage implements OnInit {

  constructor( public navCtrl: NavController) { }

  ngOnInit() {
  }

  openObjtest() {
    window.open("https://www.fbla-pbl.org/fbla/competitive-events/category/objective-test/",'_system', 'location=yes');
  }

  openObjtestRole() {
    window.open("https://www.fbla-pbl.org/fbla/competitive-events/category/objective-test-role-play/",'_system', 'location=yes');
  }

  openProdObj() {
    window.open("https://www.fbla-pbl.org/fbla/competitive-events/category/production-objective-test/",'_system', 'location=yes');
  }

  openCollab() {
    window.open("https://www.fbla-pbl.org/fbla/competitive-events/category/collaborative-objective-test-team-performance-role-play/",'_system', 'location=yes');
  }

  openPresWith() {
    window.open("https://www.fbla-pbl.org/fbla/competitive-events/category/presentation-equipment/",'_system', 'location=yes');
  }

  openPresWithout() {
    window.open("https://www.fbla-pbl.org/fbla/competitive-events/category/presentation-without-equipment/",'_system', 'location=yes');
  }

  openSpeech() {
    window.open("https://www.fbla-pbl.org/fbla/competitive-events/category/speech/",'_system', 'location=yes');
  }

  openDemo() {
    window.open("https://www.fbla-pbl.org/fbla/competitive-events/category/demonstration/",'_system', 'location=yes');
  }

  openPrePro() {
    window.open("https://www.fbla-pbl.org/fbla/competitive-events/category/prejudged-projects-presentation/",'_system', 'location=yes');
  }

  openPreRep() {
    window.open("https://www.fbla-pbl.org/fbla/competitive-events/category/prejudged-reports-presentation/",'_system', 'location=yes');
  }

  openInterview() {
    window.open("https://www.fbla-pbl.org/fbla/competitive-events/category/interview/",'_system', 'location=yes');
  }

  openTeamPro() {
    window.open("https://www.fbla-pbl.org/fbla/competitive-events/category/team-performance/",'_system', 'location=yes');
  }

  hideShow() {
    var x= document.getElementById("table");
    var y= document.getElementById("button");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "Hide Competitive Events List";
    } 
    else {
      x.style.display = "none";
      y.innerHTML = "Show Competitive Events List";
    }
  }




}
