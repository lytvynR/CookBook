import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    let recipes = [
      { id: '123a', createdDate: 'createdDate', modifiedDate: 'modifiedData', title: 'sometitle1', description: 'somedescription1' },
      { id: '123b', createdDate: 'createdDate', modifiedDate: 'modifiedData', title: 'sometitle2', description: 'somedescription2' },
    ];

    return { recipes };
  }
}
