import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  myForm: FormGroup = new FormGroup({
    'name': new FormControl('', [
      Validators.required
    ]),
    'surname': new FormControl('', [
      Validators.required,
    ]),
    'phone': new FormControl('', Validators.pattern('[0-9]{10}')),
    'type': new FormControl(0, [
      Validators.required,
    ]),
  });

  @Output() addWorker = 
  new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {}
  

  onAddWorker() {
    try{
      let worker: MyWorker = {
        name: this.myForm.value.name,
        surname: this.myForm.value.surname,
        type: this.myForm.value.type,
        phone: this.myForm.value.phone
      };
      this.addWorker.emit(worker);  
    } catch (err) {
      console.error(err);
    }
  }
}
