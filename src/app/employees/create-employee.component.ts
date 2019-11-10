import {Component, OnInit} from '@angular/core';
import {Department} from '../models/department';
import {Employee} from '../models/employee.model';
import {EmployeeService} from './employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  previewPhoto = false;

  employee: Employee = {
    gender: null,
    photoPath: null,
    name: null,
    contactPreference: null,
    dateOfBirth: null,
    department: 'select',
    email: null,
    id: null,
    isActive: null,
    phoneNumber: null
  };

  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},
    {id: 5, name: 'Admin'}
  ];

  constructor(private _employeeService: EmployeeService,
              private _router: Router) {
  }

  ngOnInit() {
  }

  saveEmployee(): void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
