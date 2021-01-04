import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpWorkersService {

  constructor() { }

  mySuperFunc(str: string) {
    console.log(str);
  }
}
