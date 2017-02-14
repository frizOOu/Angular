import { Component, OnInit, Input} from '@angular/core';
import { DataService } from '../services/data.service';
import { Http } from '@angular/http';
import { ToastComponent } from '../shared/toast/toast.component';
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
	selector: 'app-page3',
	templateUrl: './page3.component.html',
	styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit{
	//On récupère les deux tableaux stocké dans le storage.
	///Le premier contient uniquement les valeurs recupérées grace aux inputs.
	// public params = JSON.parse(localStorage.getItem('params'));
	public initdata = JSON.parse(localStorage.getItem('indata'))
	///Le deuxième contient les parametres liés aux fichiers.
	//(on retrouvera dans ce tableau les parametre spécifiques a chaque objet, par exemple le type de donné ou alors le nom de a donnée, mais en aucun cas ce qu'elle contient) 
	// public files = JSON.parse(localStorage.getItem('files'));
	public data;
	public objForm;
	constructor(private http: Http,
	            private dataService: DataService,
	            public toast: ToastComponent,
	            public route: Router) { }
	//Initialisation
	ngOnInit()
	{	
		//On genere le formulaire a l'initialisation de la page.
		this.generateForm();
		//Envoie de donnée.
		this.actionForm();
	}
	generateForm()
	{
		if(this.initdata) 
		{
			var form = document.createElement("form");
			var table = document.createElement("table");
			table.setAttribute('class',"table table-bordered table-striped");
			form.setAttribute('class', "form-inline");
			form.setAttribute('id', "form");
			form.appendChild(table);
			//on boucle sur les éléments du tableau pour recuperer le nombre ainsi que le name pour chaque input
			for (var i in this.initdata) 
			{
				var newname = this.initdata[i];
				var tr = document.createElement("tr");
				var td = document.createElement("td");
				table.appendChild(tr);
				tr.appendChild(td);
				var label = document.createElement("label");
				label.setAttribute('for', newname);
				label.innerHTML = i+" || "+newname+"=> : ";
				td.appendChild(label);
				var input = document.createElement("input");
				var inputNbr = document.createElement("input");
				var inputDate = document.createElement("input");
				input.setAttribute('name', newname);
				
				if(newname == "date") {
					input.setAttribute('type', "date");	
				}
				else if (newname == "age")
				{
					input.setAttribute('type', "number");
				}
				else if(newname == "name")
				{
					input.setAttribute('type', "text");
				}
				input.setAttribute('required', "");
				input.setAttribute('class', 'form-control');
				td.appendChild(input);
			}			
			var submit = document.createElement("input");
			submit.setAttribute('class', 'btn btn-primary');
			submit.setAttribute('type',"submit");
			submit.setAttribute('value',"gridify");
			form.appendChild(submit);
			document.getElementById('content1').appendChild(form);
		}	 	 
	}
	actionForm()
	{	
		var self = this;

		function getFormData2Object(form)
		{
		    var un_array = form.serializeArray();
		    var _array = {};
		    $.map(un_array, function(n, i)
		    {
		        if(n.name.indexOf('[') > -1 )
		        {
		            var array = n.name.match(/\[(.*?)\]/);
		            var key = n.name.replace(array[1],"").replace('[',"").replace(']',"");
		            if(!_array[key])
		            {
		                _array[key] = {};
		            }
		            _array[key][array[1]] = n['value'];
		        }
		        else
		        {
		            _array[n['name']] = n['value'];
		        }
		    });
		    return _array;
		}

		$('form').submit(function()
		{
			//get form Data To Object
			this.objForm = getFormData2Object($('form'));
			if(this.objForm){
				self.dataService.postData(this.objForm).subscribe(
		            res => 
		            {
		            	this.data = res._body;
		            	localStorage.setItem('data_filtered', this.data);
		            },
		            error => console.error(error)
		        )		        
		        self.route.navigate(['/grid']);
			}
		})
	}
}