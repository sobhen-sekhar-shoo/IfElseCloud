import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../../Services/card-service.service';
import { new_users } from 'src/app/Models/card.model';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  public UsersDt! : any;
  public faCircle : IconProp = faCircle;
  public UsersClass = ["PrBlue", "PrGreen" , "PrYellow", "PrLightBlack", "PrRed"];

  constructor(private _CardServiceService : CardServiceService){

  }

  ngOnInit(): void {
    this._CardServiceService.GetNewUsers().subscribe((res : new_users)=>{
      this.UsersDt = res;
    });
  }

}
