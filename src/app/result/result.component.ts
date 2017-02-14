import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as $ from 'jquery';
@Component({
	selector: 'app-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


	public datafiltered = JSON.parse(localStorage.getItem('data_filtered'));
	constructor() { }
	ngOnInit() 
	{
		this.generateDataFilteredGrid();
	}
	generateDataFilteredGrid()
	{	
		var table = document.createElement("table");
		var isdisplayed = false;
		table.setAttribute('class',"table table-bordered table-striped");
		console.log(this.datafiltered);
		for (var i = 0; i < this.datafiltered.length; ++i) 
		{

			var obj = this.datafiltered[i];
			delete obj['_id'];

			for (var prop in obj) 
			{
				var tr = document.createElement('tr');
				var td = document.createElement('td');
				table.appendChild(tr);
				tr.appendChild(td);
				var p = document.createElement("p");
				td.appendChild(p);
				p.innerHTML = prop+" ==> "+obj[prop];
				var displayed = true;
			}
		// this.datafiltered = [];
		}
		document.getElementById('content').appendChild(table);
	}
}
