import { Injectable } from '@angular/core';
import { Strategy, StrategyFunction } from '../service/configuration.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class NgxPermissionsConfigurationStore {

    public strategiesSource = new BehaviorSubject<Strategy>({});
    public strategies$ = this.strategiesSource.asObservable();

    public onAuthorisedDefaultStrategy: string | undefined;
    public onUnAuthorisedDefaultStrategy: string | undefined;

    constructor() {}
}