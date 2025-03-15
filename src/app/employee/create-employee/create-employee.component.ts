import { Component, Input, OnInit, Output } from '@angular/core';
import { IEmpolyee } from '../../interfaces/IEmpolyee';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {


  @Input() employeeArray: IEmpolyee[] = [];
  employeeId: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  arrIndex: number = null;

  

  constructor() { }

  ngOnInit(): void {
  }

  createEmployee(){

    const employee: IEmpolyee = {};
    employee.employeeId = this.employeeId;
    employee.firstname = this.firstname;
    employee.lastname = this.lastname;
    employee.email = this.email;
    employee.phone = this.phone;
    
    if(this.arrIndex !== null){
      this.employeeArray[this.arrIndex] = employee;
      this.employeeId = null;
      this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.phone = null;
      this.arrIndex = null
    }else{
      this.employeeArray.push(employee);
      this.employeeId = null;
      this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.phone = null;
    }

  }

  cancel(){
    this.employeeId = null;
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.phone = null;
  }

  editEmployee(index: number){
    const employee = this.employeeArray[index];
    this.employeeId = employee.employeeId;
    this.firstname = employee.firstname;
    this.lastname = employee.lastname;
    this.email = employee.email;
    this.phone = employee.phone;
    this.arrIndex = index;
  }

  deleteEmployee(index: number){
    this.employeeArray.splice(index, 1);
  }

}
