import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  string: string;

  reverseStr: any;

  @Input() taskData: any;

  @Output() outputData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    // this.outputData.emit(this.taskData)
    this.service.serviceData.subscribe((data) => {
      this.taskData = data;
    })
  }
  sendData(){
    //this.outputData.emit("Task Data")
  }

  reverseString(string){
    this.reverseStr = [...string]
    for(let i = 0; i <= (this.reverseStr.length - 1)/ 2; i++){
      let temp = this.reverseStr[i];
      this.reverseStr[i] = this.reverseStr[this.reverseStr.length - 1 - i];
      this.reverseStr[this.reverseStr.length - 1 - i] = temp;
    }
    this.reverseStr = this.reverseStr.join('');
    //this.reverseStr = this.reverseStr.toString().replace(/,/g, '');
  }

  // reverseString(string){
  //   this.reverseStr = string.split('').reverse().join('')
  //   console.log(string)
  // }

  clearBox(){
    this.reverseStr = '';
    this.string = '';
  }


}
