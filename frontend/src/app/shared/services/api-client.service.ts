import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  constructor(private httpClient: HttpClient) {}
  baseurl = 'http://localhost:13280/';

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.baseurl + url);
  }

  post<T>(url: string, data: T): Observable<T> {
    return this.httpClient.post<T>(this.baseurl + url, data);
  }

  put(url: string, data: object): Observable<void> {
    return this.httpClient.put<void>(this.baseurl + url, data);
  }

  delete(url: string): Observable<void> {
    return this.httpClient.delete<void>(this.baseurl + url);
  }
}
