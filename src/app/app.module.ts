import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListEmployeesComponent} from './employees/list-employees.component';
import {CreateEmployeeComponent} from './employees/create-employee.component';
import {EmployeeService} from './employees/employee.service';
import {SelectRequiredValidatorDirective} from './shared/select-required-validator.directive';
import {ConfirmEqualValidatorDirective} from './shared/confirm-equal-validator.directive';
import { DisplayEmployeeComponent } from './employees/display-employee.component';

const appRoute: Routes = [
  {path: 'list', component: ListEmployeesComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoute)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
