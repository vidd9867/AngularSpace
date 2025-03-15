import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { retry } from 'rxjs/operators';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  peopleData: any;
  constructor(private peoplesData: ServicesService) { }

  ngOnInit(): void {

    this.peoplesData.getPeople().subscribe((data) => {
      this.peopleData = data;
    },
    (error) => {
      retry();
      console.log('Error', error)
    })

    // this.peoplesData.getPeople().then((data) => {
    //   this.peopleData = data;
    // }).catch((error) => {
    //   console.log('Error', error)
    // })
  }


}
