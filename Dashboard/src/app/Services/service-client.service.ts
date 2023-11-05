import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {

  constructor(private _Http : HttpClient) { }


  public GetIfElseCloudApi(){
    return this._Http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/');
  }
}
