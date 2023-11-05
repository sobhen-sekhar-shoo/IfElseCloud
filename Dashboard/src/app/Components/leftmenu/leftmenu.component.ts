import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBarsStaggered, faBoxOpen, faChartSimple, faClone, faCheck, faGear, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.scss']
})
export class LeftmenuComponent {
  public faBarsStaggered: IconProp = faBarsStaggered;
  public faBoxOpen: IconProp = faBoxOpen;
  public faChartSimple: IconProp = faChartSimple;
  public faClone: IconProp = faClone;
  public faCheck: IconProp = faCheck;
  public faGear: IconProp = faGear;
  public faDownload: IconProp = faDownload;


}
