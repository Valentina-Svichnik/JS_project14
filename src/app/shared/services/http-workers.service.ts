import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  deleteWorker(id: number) {
    return this.http.delete(this.routeApi + '/' + id).toPromise();
  }
  
  saveWorker(newWorker: MyWorker) {
    let data = {
      id: newWorker[0],
      name: newWorker[1],
      surname: newWorker[2],
      phone: newWorker[3],
      type: newWorker[4]
    };
    let id = newWorker[0];
    return this.http.put(this.routeApi + '/' + id, data).toPromise();
  }
}