/*
 *MODULES
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
/*
 *COMPONENTS
 */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToastComponent } from './shared/toast/toast.component';
import { FormComponent } from './form/form.component';
/*
 *Service
 */
import { DataService } from './services/data.service';
import { ResultComponent } from './result/result.component';


/*
 *ROUTES
 */
const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path:'form', component : FormComponent }
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToastComponent,
    FormComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    DataService,
    ToastComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
