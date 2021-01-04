import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { MyWorker } from '../worker.model';

@Injectable({
  providedIn: 'root'
})
export class HttpWorkersService {

  routeApi = 'http://localhost:3000/workers';
  constructor(private http: HttpClient) { }

  getWorkers(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }

  postWorkers(data: MyWorker){
    this.http.post(this.routeApi, data).toPromise();
  }
}
