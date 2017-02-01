import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{

public params = [];
public param = [];
public type
public storage;

  constructor(private http: Http, public route: Router, public toast: ToastComponent)
  {   
    this.params = [ 'param1', 'param2', 'param3', 'param4', "param5", "param6", "param7", "param8", "param9", "param10", "param11", "param12", "param13", "param14", "param15", "param16", "param17", "param18", "param19", "param20"]; 
  }
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
      this.route.navigate(['/form']);
    }
    else
    {
      this.route.navigate(['/']);
    }
  }
}