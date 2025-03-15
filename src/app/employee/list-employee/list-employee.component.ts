import { Component, OnInit, Input } from '@angular/core';
import { IEmpolyee } from '../../interfaces/IEmpolyee';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employeeData: IEmpolyee[] = [];

  serviceData: any;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {

  }

}
