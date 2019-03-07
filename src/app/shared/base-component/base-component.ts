import { Component, OnDestroy, Injector} from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  template: '',
})
export class BaseComponent implements OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  private route: Router;

  constructor(private injector: Injector ) {
    this.route = injector.get<Router>(Router);

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  navigate(route: string, id: string = null) {
      this.route.navigate([route, id]);
  }
}
