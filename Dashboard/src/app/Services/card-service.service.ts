import { Injectable } from '@angular/core';

import { ServiceClientService } from '../Services/service-client.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor( private _ServiceClientService : ServiceClientService) { }

  public GetCardDt(){
    return this._ServiceClientService.GetIfElseCloudApi().pipe(map((res : any) => {
      return res.top_cards;
    }));;
  }

  public GetNewUsers(){
    return this._ServiceClientService.GetIfElseCloudApi().pipe(map((res : any) => {
      return res.new_users;
    }));;
  }
  
  public GetRecentOrders(){
    return this._ServiceClientService.GetIfElseCloudApi().pipe(map((res : any) => {
      return res.recent_orders;
    }));;
  }
}
