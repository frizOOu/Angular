/*
 *MODULES
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';
/*
 *COMPONENTS
 */
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { ToastComponent } from './shared/toast/toast.component';
// import { ResultComponent } from './result/result.component';
import { GridComponent } from './grid/grid.component';
/*
 *Service
 */
import { DataService } from './services/data.service';
/*
 *ROUTES
 */
const routing = RouterModule.forRoot([
    { path: '', component: Page1Component },
    { path:'page2', component : Page2Component },
    { path:'page3', component : Page3Component},
    { path:'grid', component : GridComponent}
]);

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    // ResultComponent,
    GridComponent,
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
