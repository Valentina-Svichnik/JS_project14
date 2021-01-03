export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    id?: number;
    phone: string;
}

export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager,
}

export let MyWorkersDatabase: MyWorker[] = [
    {id:1, name: 'Ivan', surname: 'Ivanov', type: 0, phone:"89456765426"},
    {id:2, name: 'Petr', surname: 'Petrov', type: 1, phone:"89456765427"},
    {id:3, name: 'Sidor', surname: 'Sidorov', type: 2, phone:"89456761426"},
    {id:4, name: 'Vasiliy', surname: 'Vasilyev', type: 3, phone:"89456065426"},
];