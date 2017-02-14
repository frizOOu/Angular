import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

public params = [ 'param1', 'param2', 'param3', 'param4', "param5", "param6", "param7", "param8", "param9", "param10", "param11", "param12", "param13", "param14", "param15", "param16", "param17", "param18", "param19", "param20"]; 
public param = [];
public storage;
  constructor(public route: Router){ }
//Capter l'evenenement ngModelChange pour avoir les valeurs
  capt(event){
    if(event) {
      this.param.push(event);
      this.storage = JSON.stringify(this.param);
      localStorage.setItem('params', this.storage);
    }
  }
  OnSubmit()
  { 
    // si les parametres sont renseignés 
    // alors on affiche le form
    // sinon on redirige sur la page d'accueil 
    if(this.param.length > 0) 
    {
      this.route.navigate(['/page2']);
    }
    else
    {
      this.route.navigate(['/']);
    }
  }
}