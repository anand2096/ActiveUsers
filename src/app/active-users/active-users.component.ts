import { Component, OnInit } from '@angular/core';
import {RealTimeDataGenrationServiceService} from '../real-time-data-genration-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  value:number=0;
  constructor(private realTimeDataGenrationServiceService:RealTimeDataGenrationServiceService) { 


    setInterval(() => {this.getDataFromService();}, 1000);
  
  }

  ngOnInit(): void {
    
  }
  
getDataFromService()
{
 this.value= this.realTimeDataGenrationServiceService.getRealTimeData();
}
}
