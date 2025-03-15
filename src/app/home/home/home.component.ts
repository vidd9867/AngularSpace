import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { IFramework } from '../../interfaces/Iframework';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  frameData: any;
  statusData: IFramework[] // IFramework is an interface

  constructor(private frameWorksData: ServicesService, private router: Router) {
  }
  hideTable: boolean = false;
  homeData: any;
  homeToTask: any;

  homeToStatus: any;

  css1 = ''

  arrFruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple']

  style = {color: 'red', fontSize: '20px'}

  ngOnInit(): void {
 
  }

  dataBinding(value){
    console.log('Data Binding', value)
    this.homeToTask = value;
  }

  taskBinding(value){
    console.log('Task Binding', value)
    this.homeToStatus = value;
  }
  // @Input() FrameWorksData: any;
  showData(){
    this.hideTable = !this.hideTable;
    this.statusData = this.frameWorksData.getFrameworks();
    // this.frameData.subscribe((data) => {
    //   this.statusData = data;
    // });
  }

  backToDetail(){
    this.router.navigate(['/detail']);
  }
}
