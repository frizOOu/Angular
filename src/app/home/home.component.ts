import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, Validators, FormGroup } from '@angular/forms';
// import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { ToastComponent } from '../shared/toast/toast.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router'
import 'rxjs/add/operator/map';
@Component({
  moduleId : "module.id",
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  
  public params = [];
  public param = [];
  public storage;
  public test;
  public data;
  constructor(private http: Http, private dataService: DataService, public route: Router, public toast : ToastComponent)
  { 
  // this.params = [ 'param1', 'param2', 'param3', 'param4', "param5", "param6", "param7", "param8", "param9", "param10", "param11", "param12", "param13", "param14", "param15", "param16", "param17", "param18", "param19", "param20"]; 
  // this.param = [];

  }
  ngOnInit()
  {
    this.getTypeOfParam();
  }
  //Capter l'evenenement ngModelChange pour avoir les valeurs
  // capt(event){
  //   // this.param.push(event);
  //   // On peut pas stocker le tableau dans le localstorage, il faut le stringify
  //   // this.storage = JSON.stringify(this.param);
  //   // //add Parameter to localStorage

  //   // localStorage.setItem('params', this.storage);
    
  // }


  getTypeOfParam()
  {
    this.dataService.getTypeOfParam().subscribe( 
          res => res.json(),
          error => console.log(error)
    )
  }
}