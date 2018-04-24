import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class NgxPermissionsStore {

    public permissionsSource = new BehaviorSubject({});
    public permissions$ = this.permissionsSource.asObservable();


    constructor() {}
}