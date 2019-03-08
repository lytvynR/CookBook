import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { routeConstants } from 'src/app/routes/route-constants';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() menuClicked = new EventEmitter();
  routeConstants = routeConstants;

  ngOnInit() {}

  toggleSidenav() {
    this.menuClicked.emit();
  }
}
