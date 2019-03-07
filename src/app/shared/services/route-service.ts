import { Injectable } from '@angular/core';
import { SharedModule } from '../shared-module';

@Injectable({
  providedIn: SharedModule,
})
export class RouteService {
  getRouterLink(routeName: string) {
    return ['/' + routeName];
  }
}
