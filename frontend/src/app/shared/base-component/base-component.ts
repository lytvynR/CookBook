import { Component, OnDestroy, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-base',
  template: '',
})
export class BaseComponent implements OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  private route: Router;
  private location: Location;

  constructor(injector: Injector) {
    this.route = injector.get<Router>(Router);
    this.location = injector.get<Location>(Location);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  navigate(route: string, id: string = null) {
    id === null ? this.route.navigate([route]) : this.route.navigate([route, id]);
  }
  navigateWithQueryParams(route: string, queryParams: object) {
    this.route.navigate([route], queryParams);
  }

  back() {
    this.location.back();
  }
}
