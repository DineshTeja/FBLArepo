import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController , private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  login() {
    var compInput = <HTMLIonInputElement>document.getElementById("compEventsInput");
    var namesInput = <HTMLIonInputElement>document.getElementById("nameInput");
    var chapterInput = <HTMLIonInputElement>document.getElementById("chapterInput");
    var customerIcon = document.getElementById("customerIcon");
    var headerpic = document.getElementById("headerpic");
    var accountList = document.getElementById("accountList");
    var joinButton = document.getElementById("joinButton");
    var memberItem = document.getElementById("memberItem");
    var compItem = document.getElementById("compItem");
    var chapItem = document.getElementById("chapItem");
    var memberLabel = document.createElement("ion-label");
    var compLabel = document.createElement("ion-label");
    var chapLabel = document.createElement("ion-label");
    var logoutButton = <HTMLIonButtonElement>document.getElementById("logoutButton");


    memberLabel.innerHTML = namesInput.value;
    compLabel.innerHTML = compInput.value;
    chapLabel.innerHTML = chapterInput.value;

    memberItem.appendChild(memberLabel);
    compItem.appendChild(compLabel);
    chapItem.appendChild(chapLabel);

    accountList.appendChild(memberItem);
    accountList.appendChild(compItem);
    accountList.appendChild(chapItem);
    accountList.style.display = "block";

    alert('Your account has been created successfully');
    customerIcon.style.display = "block";
    headerpic.style.display = "none";

    chapterInput.value = "";
    compInput.value = "";
    namesInput.value = "";
    chapterInput.style.display = "none";
    compInput.style.display = "none";
    namesInput.style.display = "none";
    joinButton.style.display = "none";
    logoutButton.style.display = "block";

    logoutButton.onclick = function logout() {
      chapterInput.style.display = "block";
      compInput.style.display = "block";
      namesInput.style.display = "block";
      joinButton.style.display = "block";
      headerpic.style.display = "block";
      customerIcon.style.display = "none";
      memberLabel.remove();
      compLabel.remove();
      chapLabel.remove();
      logoutButton.style.display = "none";
      accountList.style.display = "none"
    }
  }



}
