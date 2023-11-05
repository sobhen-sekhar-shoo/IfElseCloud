import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCaretDown, faMessage, faCircle, faBell } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  public faSearch : IconProp = faSearch;
  public faCaretDown : IconProp = faCaretDown;
  public faMessage : IconProp = faMessage;
  public faCircle : IconProp = faCircle;
  public faBell : IconProp = faBell;

}
