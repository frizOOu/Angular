import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
@Component({
	selector: 'app-page2',
	templateUrl: './page2.component.html',
	styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit 
{
	public params = JSON.parse(localStorage.getItem('params'));
	public objForm;
	
	constructor(public router : Router){ }

	ngOnInit() 
	{
		this.generateFormFilter();
		this.actionForm();
	}
	generateFormFilter()
	{
		if(this.params.length > 0)
		{		
			//On creer les elements 
			var form = document.createElement("form");
			var table = document.createElement("table");
			table.setAttribute('class',"table table-bordered table-striped");
			form.setAttribute('class', "form-inline");
			form.setAttribute('id', "form");
			form.appendChild(table);
			//on boucle sur les éléments du tableau pour recuperer le nombre ainsi que le name pour chaque input
			for (var j = 0; j < this.params.length; ++j) 
			{
				var tr = document.createElement("tr");
				var td = document.createElement("td");

				var label = document.createElement("label");
				label.setAttribute('for', this.params[j]);
				label.innerHTML = this.params[j]+" => ";
				table.appendChild(tr);
				tr.appendChild(td);
				td.appendChild(label);
				var input = document.createElement("input");
				input.setAttribute('name', this.params[j]);
				input.setAttribute('required', "");
				input.setAttribute('class', 'form-control')
				td.appendChild(input);	
			}			
			var submit = document.createElement("input");
			submit.setAttribute('class', 'btn btn-primary');
			submit.setAttribute('type',"submit");
			submit.setAttribute('value',"generate");
			form.appendChild(submit);
			document.getElementById('content').appendChild(form);
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
				localStorage.setItem('indata', JSON.stringify(this.objForm));
				self.router.navigate(['/page3'])
			}
		})
	}
}
