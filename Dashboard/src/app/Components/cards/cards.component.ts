import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faMusic, faChartPie, faDownload, faRotate } from '@fortawesome/free-solid-svg-icons';
import { CardServiceService } from '../../Services/card-service.service';
import { cardsdt } from '../../Models/card.model';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent  implements OnInit {
 
  public Card_0 : IconProp = faMusic;
  public Card_1 : IconProp = faChartPie;
  public Card_2 : IconProp = faDownload;
  public Card_3 : IconProp = faRotate;
  public CardsDt! : any;
  public UsersClass = [this.Card_0, this.Card_1 , this.Card_2, this.Card_3];

  constructor(private _CardServiceService : CardServiceService){

  }

  ngOnInit() {
    this._CardServiceService.GetCardDt().subscribe((res : cardsdt)=>{
      this.CardsDt = res;
    })
  }

}
