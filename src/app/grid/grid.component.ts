import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';
import * as $ from 'jquery';

@Component({
	selector: 'app-grid',
	template: '<jqxGrid></jqxGrid>',
	templateUrl : './grid.component.html',
	styleUrls: ['./grid.component.css']
})
export class GridComponent implements AfterViewInit 
{
	public datafiltered = JSON.parse(localStorage.getItem('data_filtered'));
	@ViewChild('jqxgrid') dataGrid: jqxGridComponent;

	constructor() {}

	ngAfterViewInit(): void 
	{	
		console.log(this.datafiltered);
		this.dataGrid.createComponent(this.settings);
	}
	source	=
	{
		datatype : "json",
		localdata : this.datafiltered,
	};
	dataAdapter = new $.jqx.dataAdapter(this.source);
	cellsrenderer = (row, columnfield, value, defaulthtml, columnproperties, rowdata) =>
	{
		if(value>20)
		{
			return '<span style ="margin : 4px; float: '+columnproperties.cellsalign+'; color : #ff0000;">'+value+'</span>';
		}
		else
		{
			return '<span style ="margin : 4px; float :'+columnproperties.cellsalign+'; color : #008000">'+value+'</span>';
		}
	}
	settings: jqwidgets.GridOptions = {
		width : 850,
		source : this.dataAdapter,
		pageable : true,
		autoheight : true,
		sortable : false,
		altrows : true,
		enabletooltips : false,
		// columns : [
		// {
		// 	text: 'Product Name', columngroup: 'ProductDetails',
		// 	datafield: 'ProductName', width: 250
		// },
		// {
		// 	text: 'Quantity per Unit', columngroup: 'ProductDetails',
		// 	datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 200
		// },
		// {
		// 	text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: 200
		// },
		// {
		// 	text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: this.cellsrenderer, width: 100
		// },
		// {
		// 	text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued'
		// }
		// ],
	}  
}