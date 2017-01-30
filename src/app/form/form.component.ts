import { Component, OnInit, Input} from '@angular/core';
import { DataService } from '../services/data.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { ToastComponent } from '../shared/toast/toast.component';
import 
@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

	public params = JSON.parse(localStorage.getItem('params'));
	public test = [];
	public form: FormGroup;



	constructor(private http: Http,
	            private dataService: DataService,
	            public toast: ToastComponent,
	            private formBuilder: FormBuilder) { 

	}

	ngOnInit()
	{
		this.form = this.formBuilder.group({

		});
	}
	generateInView(){
		var form = document.createElement("form");
	    var element1 = document.createElement("input"); 
	    var element2 = document.createElement("input");  

	    form.method = "POST";
	    form.action = "fetch()";   

	    element1.value=un;
	    element1.name="un";
	    form.appendChild(element1);  

	    element2.value=pw;
	    element2.name="pw";
	    form.appendChild(element2);

	    document.body.appendChild(form);

	    form.submit();
	    <form style="display:inline" (ngSubmit)="fetch()">
		<table class="table table-bordered table-striped">
			<tr *ngFor="let param of params">
				<td>
					{{param}}
					<input type name="{{param}}">
				</td>
			</tr>
			<button class="btn btn-primary"><i class="fa fa-search"></i>Find</button>
		</table>
	</form>



	// }
	// fetch()	
	// {
	// 	this.dataService.fetch(this.form.value).subscribe(
	// 	    res => this.test = res,
	// 	    error => console.log(error)
	// 	);
	// }
}
