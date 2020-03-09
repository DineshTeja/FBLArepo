import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from 'ion2-calendar';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  date;
  selectedChapter;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  generateNewList() {
    
    var calendar = document.getElementById("calendar");
    var chapterPicker = <HTMLIonSelectElement>document.getElementById("chapterPicker");
    var container = document.getElementById("eventsContainer");
    var addEvent = document.getElementById("EventsButton");
    var calendarValue = document.getElementById("date");
    var eventsList = document.createElement("ion-list");

    var dateValue = calendarValue.innerHTML;
    eventsList.setAttribute("color","black");
  
    eventsList.setAttribute("font-color", "black");

    eventsList.id = dateValue + chapterPicker.value;

    container.appendChild(eventsList);

    var containerChildren = container.querySelectorAll("ion-list");
 
    containerChildren.forEach(function(list) {

      if(list.id == dateValue + chapterPicker.value){
        list.style.display= "block";
      }
      else {
        list.style.display = "none";
      }
    });

    container.style.display = "block";

  }

  newEvent() {
    var calendar = document.getElementById("calendar");
    var chapterPicker = <HTMLIonSelectElement>document.getElementById("chapterPicker");
    var calendarValue = document.getElementById("date");
    var dateValue = calendarValue.innerHTML;
  
    if (calendarValue.innerHTML == "" || chapterPicker.value == null || chapterPicker.value == '') {
      alert('Please select a date and a school');
    }

    else {
      var slidingItem = <HTMLIonItemSlidingElement>document.createElement("ion-item-sliding");
      var itemStarting = <HTMLIonItemOptionsElement>document.createElement("ion-item-options");
      var deleteButton = <HTMLIonItemOptionElement>document.createElement("ion-item-option");
      var eventLabel = document.createElement("ion-label");
      var timeLabel = document.createElement("ion-label");
      var item = document.createElement("ion-item");
      var list = document.getElementById(dateValue + chapterPicker.value);
      var eventInput = <HTMLInputElement>document.getElementById("eventInput");
      var timeInput = <HTMLInputElement>document.getElementById("timeInput");

      itemStarting.setAttribute("side", "end");

      eventLabel.innerHTML = eventInput.value;
      timeLabel.innerHTML = timeInput.value;

      eventInput.value = "";
      timeInput.value = "";

      deleteButton.style.backgroundColor = "red";
      deleteButton.style.color = "white";
      deleteButton.innerHTML = "delete";

      itemStarting.appendChild(deleteButton);
      slidingItem.appendChild(itemStarting);
      eventLabel.setAttribute("font-color", "black");
      timeLabel.setAttribute("font-color", "black");

      item.appendChild(eventLabel);
      item.appendChild(timeLabel);
      slidingItem.appendChild(item); 

      list.appendChild(slidingItem);
      list.style.display = "block";

      deleteButton.onclick = function removeItem(){
        item.remove();
        deleteButton.remove();
        deleteButton.remove();
        slidingItem.remove();
        itemStarting.remove();
      }
    
   

    }

  }

}
