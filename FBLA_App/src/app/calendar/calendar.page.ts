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

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  onChange() {
    var eventsList = document.createElement("list");
    var calendar = document.getElementById("calendar");
    var chapterPicker = <HTMLIonSelectElement>document.getElementById("chapterPicker");
    var container = document.getElementById("eventsContainer");
    var addEvent = document.getElementById("EventsButton")

    var dateValue = calendar.nodeValue;
    eventsList.setAttribute("color","black");
    
    /**event.format('DD-MM-YYYY') */
    

    eventsList.id = dateValue + chapterPicker.value;
    container.appendChild(eventsList);

    var containerChildren = container.querySelectorAll("ion-list");

    containerChildren.forEach(function(list) {
      /**this.storage.set('key', list);*/
      if(list.id != dateValue + chapterPicker.value){
        list.style.display= "none";
        list.innerHTML = "ddd";
      }
      else {
        list.style.display = "block";
        list.innerHTML = " d";
      }
    });

  }

  async newEvent() {
    let alert = this.alertCtrl.create ({
      header: 'Add Event',
      inputs: [
        {
          name: 'eventTitle',
          placeholder: 'Name of the Event'
        },
        {
          name: 'Time',
          placeholder: 'Event Time'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Done',
                    
      }
      ]
    });

     (await alert).present();

     





  }


  

}
