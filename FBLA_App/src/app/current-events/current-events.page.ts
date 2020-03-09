import { Component, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
import { NavController } from '@ionic/angular';

import { isNgTemplate, ParseError } from '@angular/compiler';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';
import { AlertController } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { $ } from 'protractor';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';



@Component({
  selector: 'app-current-events',
  templateUrl: './current-events.page.html',
  styleUrls: ['./current-events.page.scss'],
})


export class CurrentEventsPage implements OnInit {

  today;
  lastThirty;
  selectedDate;
  selectedChapter;

  constructor(public navCtrl: NavController , private alertCtrl: AlertController, public storage: Storage ) { 
   var datepicker = document.getElementById("DatePicker");
   this.today = new Date().toISOString();
   let now = new Date();
   now.setDate(now.getDate() - 3320);
   this.lastThirty = now.toISOString();

   var container = document.getElementById("listContainer");
    var x = this.storage.get('containerUpdate');
    /**container.innerHTML = x;*/
/** 
    this.storage.get('containerUpdate').then((val) => {
      container.innerHTML = val;
    });*/

    /**container.style.display = "block";*/

  }

  ngOnInit() {/** 
    var datepicker = <HTMLIonDatetimeElement>document.getElementById("DatePicker");
    var chapterPicker = <HTMLIonSelectElement>document.getElementById("chapterPicker");
    var newList = document.getElementById(datepicker.value + chapterPicker.value);
    var container = document.getElementById("listContainer");
    var containerChildren = container.querySelectorAll("ion-list");

    containerChildren.forEach(function(list) {
      var x = this.storage.get('list');
      /**newList.innerHTML = x;
      if(list.id == datepicker.value + chapterPicker.value){
        list.innerHTML = x;
      }
      else{

      }
    });*/ 

    
    
  }

  containerUpdate() {
    var container = document.getElementById("listContainer");
    var containerChildren = container.querySelectorAll("ion-list");
    this.storage.set('containerUpdate', container.innerHTML);
  }

  ngOnChanges() {

  }

/** 
  load() {
    var datepicker = <HTMLIonDatetimeElement>document.getElementById("DatePicker");
    var chapterPicker = <HTMLIonSelectElement>document.getElementById("chapterPicker");
    var newList = document.getElementById(datepicker.value + chapterPicker.value);
    var container = document.getElementById("listContainer");
    var containerChildren = container.querySelectorAll("ion-list");

/** 
    function check() {
      if(newList.id == datepicker.value + chapterPicker.value){
        newList.innerHTML = x;
      }
    }

    check();

    containerChildren.forEach(function(list) {
      var x = this.storage.get(datepicker.value + chapterPicker.value);
      /**newList.innerHTML = x;
      if(list.id == datepicker.value + chapterPicker.value){
        list.innerHTML = JSON.stringify(x);
      }
      else{

      }
    }); 
  }

  */
/** 
  save() {
    var saveButton = document.getElementById("save");
    var loadButton = document.getElementById("load");
    var datepicker = <HTMLIonDatetimeElement> document.getElementById("DatePicker");
    var chapterPicker = <HTMLIonSelectElement>document.getElementById("chapterPicker");
    var list = document.getElementById(datepicker.value + chapterPicker.value);
    var nodes = document.getElementsByTagName('ion-item-sliding');
    var containerChildren = container.querySelectorAll("ion-list");

    var container = document.getElementById("listContainer");

    var x = list.innerHTML;
    this.storage.set(datepicker.value + chapterPicker.value, JSON.stringify(x));
  
  }*/

  generateNewList() {
    var datepicker = <HTMLIonDatetimeElement>document.getElementById("DatePicker");
    var chapterPicker = <HTMLIonSelectElement>document.getElementById("chapterPicker");
    var container = document.getElementById("listContainer");

    var newList = document.createElement("ion-list");

    newList.id = datepicker.value + chapterPicker.value;
    newList.className = "lists";

    
    container.appendChild(newList);

    var containerChildren = container.querySelectorAll("ion-list");

    containerChildren.forEach(function(list) {
      
      if(list.id == datepicker.value + chapterPicker.value){  
        /** 
        function loadtoDo() {
          if(this.storage.get('list')) {
            newList.innerHTML = this.storage.get('list');
          }
        }
        loadtoDo();*/
        /** 
        var x = this.storage.get(datepicker.value + chapterPicker.value);
        list.innerHTML = x;*/
        list.style.display = "block";
      }
      else {
        list.style.display = "none";
      }
    });

   

    container.style.display = "block";
  }

  
  checkBoxAdd() {

    var datepicker = <HTMLIonDatetimeElement> document.getElementById("DatePicker");
    var chapterPicker = <HTMLIonSelectElement>document.getElementById("chapterPicker");

    if (datepicker.value == null || datepicker.value== '' || chapterPicker.value == null || chapterPicker.value == '') {
      alert('Please select a date and a school');
    }

    else {

     var checkSlidingItem = <HTMLIonItemSlidingElement>document.createElement("ion-item-sliding");
     var checkStarting = <HTMLIonItemOptionsElement>document.createElement("ion-item-options");
     var deleteButton = <HTMLIonItemOptionElement>document.createElement("ion-item-option");
     var checkBoxLabel = document.createElement("ion-label");
     var checkBox = document.createElement("ion-checkbox");
     var checkBoxContainer = document.createElement("ion-item");

     var chapterPicker = <HTMLIonSelectElement>document.getElementById("chapterPicker");
     var list = document.getElementById(datepicker.value + chapterPicker.value);

     var addMember = <HTMLInputElement>document.getElementById("nameInput");
     var editButton = <HTMLButtonElement>document.getElementById("EditButton");
    
     checkStarting.setAttribute("side", "end");

    

     checkBoxLabel.innerHTML = addMember.value;
 
     addMember.value = "";

     deleteButton.style.backgroundColor = "red";
     deleteButton.style.color = "white";
     deleteButton.innerHTML = "delete";

    
     checkStarting.appendChild(deleteButton);
     checkSlidingItem.appendChild(checkStarting);

     checkBoxLabel.setAttribute("font-color", "black");

     checkBox.setAttribute("slot","start");
     checkBox.setAttribute("color","primary");

     checkBoxContainer.appendChild(checkBox);
     checkBoxContainer.appendChild(checkBoxLabel);
     checkSlidingItem.appendChild(checkBoxContainer); 
  
     list.appendChild(checkSlidingItem);

     list.style.display = "block";

    /** this.storage.set(datepicker.value + chapterPicker.value, JSON.stringify(list.innerHTML) );*/
     var x = this.storage.get(datepicker.value + chapterPicker.value);
     

     deleteButton.onclick = function removeItem(){
       checkBoxContainer.remove();
       deleteButton.remove();
       deleteButton.remove();
       checkSlidingItem.remove();
       checkStarting.remove();
     }

     editButton.onclick = function showDelete() {
        
     }
    
    }

  }

/** 
  await load() {
    var datepicker = <HTMLIonDatetimeElement> document.getElementById("DatePicker");
    var chapterPicker = <HTMLIonSelectElement>document.getElementById("chapterPicker");
    var list = document.getElementById(datepicker.value + chapterPicker.value);
    var saved = this.storage.get('list');

    list.innerHTML = this.storage.get('list');
  }*/
     
}


  


