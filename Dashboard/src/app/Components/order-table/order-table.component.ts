import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../../Services/card-service.service';
import { recent_orders } from 'src/app/Models/card.model';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  public TblDt :any;
  public RemoveIco :IconProp = faXmark;

  constructor(private _CardServiceService: CardServiceService) {

  }

  ngOnInit(): void {
    this._CardServiceService.GetRecentOrders().subscribe((res : recent_orders)=>{
      this.TblDt = res;
    });
  }

}
