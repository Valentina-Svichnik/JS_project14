import { Component, OnInit } from '@angular/core';
import { HttpWorkersService } from './shared/services/http-workers.service';
import { MyWorker, MyWorkersDatabase, MyWorkerType } from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Список сотрудников';
  workers: MyWorker[] = [];
  MyWorkerType = MyWorkerType;

  constructor(private HttpWorkersService: HttpWorkersService) { }

  ngOnInit() {
    this.HttpWorkersService.mySuperFunc('Its working!');
  }
  

  getByType(type: number) {
    return this.workers.filter((worker) => 
    worker.type === type);
  }

  onDeleteWorker(id: number) {
    let index = this.workers.findIndex(worker => 
      worker.id === id);
      if (index !== -1) {
        this.workers.splice(index, 1);
      }
  }

  save(newWorker) {
    for(let worker of this.workers){
      if (worker.id == newWorker[0]) {
        worker.name = newWorker[1];
        worker.surname = newWorker[2];
        worker.phone = newWorker[3];
      }
    }
  }

  onAddWorker(worker: MyWorker) {
    let id = 
      this.workers.length > 0 
        ? this.workers[this.workers.length - 1].id + 1 
        : 0;
    worker.id = id;
    if (worker.name !== undefined && worker.surname !== undefined && worker.phone !== undefined && worker.name && worker.surname && worker.phone) {
      this.workers.push(worker);
    } else {
      alert('Пожалуйста, введите имя, фамилию и телефон работника');
    }
  }
}