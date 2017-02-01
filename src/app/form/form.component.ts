import { Component, OnInit, Input} from '@angular/core';
import { DataService } from '../services/data.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { ToastComponent } from '../shared/toast/toast.component';
import 'rxjs/add/operator/map';
@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

	public items = JSON.parse(localStorage.getItem('params'));
	public files = JSON.parse(localStorage.getItem('files'));
	public data;


	searchForm: FormGroup;

  	param1 = new FormControl('', Validators.required);

	constructor(private http: Http,
	            private dataService: DataService,
	            public toast: ToastComponent,
	            private formBuilder: FormBuilder) { }

	ngOnInit()
	{	

		this.searchForm = this.formBuilder.group({
			param1: this.param1,
		});
		//get data from api
		this.dataService.getSchema().subscribe(
	        res =>{
	        	this.data = res;
	        	localStorage.setItem('files', JSON.stringify(this.data))
	        } ,
	        error => console.log(error)
		)
		//generate the form 
		this.generateForm();
	}

	generateForm()
	{	
		if(this.items.length > 0)
		{		

			var form = document.createElement("form");
			// form.setAttribute("NgSubmit", "getIfString()");
			var tr = document.createElement("tr");
			var td = document.createElement("td");
			var table = document.createElement("table");
			//on boucle sur les éléments du tableau pour recuperer le nombre ainsi que le name pour chaque input
			for (var j = 0; j < this.items.length; ++j) {

				var label = document.createElement("label");
				label.setAttribute('for', this.items[j]);
				label.innerHTML = this.items[j];
				form.appendChild(label);
				var input = document.createElement("input");
				var inputNbr = document.createElement("input")
				input.setAttribute('name', this.items[j]);
				inputNbr.setAttribute('name', this.items[j]);

				for (var i = 0; i < this.files.length; ++i) {

					if(this.files[i].instance === "Number" && this.files[i].path === this.items[j]) {
						input.setAttribute('type', "number");
						inputNbr.setAttribute('type', 'number');
						form.appendChild(input);
						form.appendChild(inputNbr);

					}
					else if(this.files[i].instance === "String" && this.files[i].path === this.items[j])
					{
						input.setAttribute('type', "text");
						form.appendChild(input);
					}
					else if(this.files[i].instance === "Date" && this.files[i].path === this.items[j])
					{
						input.setAttribute('type', "date");
						form.appendChild(input);
					}
				}
				
			}
			table.setAttribute('class',"table table-bordered table-striped");			
			var submit = document.createElement("input");
			submit.setAttribute('class', 'btn btn-primary');
			submit.setAttribute('type',"submit");
			submit.setAttribute('value',"Search");
			form.appendChild(table);
			form.appendChild(submit);
			document.getElementById('content1').appendChild(form);
		}
	}

	SubmitForm()
	{
    	document.forms['search'].action= this.getIfString();
    	document.forms['search'].submit();
 
    	document.forms['search'].action= this.getIfNumber();
    	document.forms['search'].submit();

    	document.forms['search'].action= this.getIfDate();
    	document.forms['search'].submit();
    	return true;
	}
	//Queries
	getIfString()
	{
		console.log('alors')
		// this.dataService.getIfString(this.searchForm.value).subscribe(
	 //       res => {
	 //       	this.data = res;
	 //       }, 
	 //       error => console.log(error)
		// )
	}
	getIfDate()
	{
	// this.dataService.getIfDate().subscribe(
	//        res => {
	//        	this.data = res;
	//        }, 
	//        error => console.log(error)
	// )
	}

	getIfNumber()
	{
		
	}
	
	getIfGreaterThan()
	{

	}

	getIfLesserThan()
	{

	}

	
}