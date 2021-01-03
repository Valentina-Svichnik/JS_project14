import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit {

  @Input() title: string;
  @Input() workers: MyWorker[] = [];
  @Output() deleteWorker = new EventEmitter<number>();
  @Output() editWorker = new EventEmitter<number>();
  @Output() saveWorker = new EventEmitter();
  editForm: FormGroup = new FormGroup({
    'editName': new FormControl('', [
      Validators.required
    ]),
    'editSurname': new FormControl('', [
      Validators.required,
    ]),
    'editPhone': new FormControl('', Validators.pattern('[0-9]{10}')),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  onEditWorker(id: number) {
    let form = document.getElementsByClassName(String(id));
    this.editWorker.emit(id);
    form[0].classList.add("display-block");
    form[1].classList.add("display-block");
    form[2].classList.add("display-block");
    form[3].classList.add("display-block");
    form[0].classList.remove("display-none");
    form[1].classList.remove("display-none");
    form[2].classList.remove("display-none");
    form[3].classList.remove("display-none");
  }

  save(id: number) {
    let form = document.getElementsByClassName(String(id));
    form[0].classList.add("display-none");
    form[1].classList.add("display-none");
    form[2].classList.add("display-none");
    form[3].classList.add("display-none");
    form[0].classList.remove("display-block");
    form[1].classList.remove("display-block");
    form[2].classList.remove("display-block");
    form[3].classList.remove("display-block");
    let newWorker = [id, this.editForm.value.editName, this.editForm.value.editSurname, this.editForm.value.editPhone];
    // this.editName = '';
    // this.editSurname = '';
    // this.editPhone = '';
    this.saveWorker.emit(newWorker);
  }

}
