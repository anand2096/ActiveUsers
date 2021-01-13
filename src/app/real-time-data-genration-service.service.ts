import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealTimeDataGenrationServiceService {

  constructor() { }

  getRealTimeData()
  {
    return Math.floor(Math.random()*1000);
  }
}
