import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-meet-us',
  templateUrl: './meet-us.page.html',
  styleUrls: ['./meet-us.page.scss'],
})
export class MeetUSPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  generateNewList() {
    var chapterPicker = <HTMLIonSelectElement>document.getElementById("chapterPicker");
    var officerList = document.createElement("ion-list");
    var container = document.getElementById("listContainer");

    officerList.id = chapterPicker.value;

    container.appendChild(officerList);

    var containerChildren = container.querySelectorAll("ion-list");

    containerChildren.forEach(function(list){
      if(list.id == chapterPicker.value){
        list.style.display = "block";
      }
      else {
        list.style.display = "none";
      }

    });
    container.style.display = "block";
  }

  officerAdd() {
    var item = document.createElement("ion-item");
    var officerLabel = document.createElement("ion-label");
    var nameLabel = document.createElement("ion-label")
    var officerInput = <HTMLInputElement>document.getElementById("officerInput");
    var nameInput = <HTMLInputElement>document.getElementById("nameInput");
    var chapterPicker = <HTMLIonSelectElement>document.getElementById("chapterPicker");
    var officerList = document.createElement("ion-list");
    var container = document.getElementById("listContainer");
    var list = document.getElementById(chapterPicker.value);

    officerLabel.innerHTML = officerInput.value;
    nameLabel.innerHTML = nameInput.value;
    officerLabel.className = "officerLabel";

    item.appendChild(nameLabel);
    item.appendChild(officerLabel);

    list.appendChild(item);
    
    officerInput.value = "";
    nameInput.value = "";

    container.appendChild(list);
  }

}

/**let slideData = [{ image: "../../assets/meetpage.png" },{ image: "../../assets/arteam.png" },{ image: "../../assets/officerpic.png" }]**/