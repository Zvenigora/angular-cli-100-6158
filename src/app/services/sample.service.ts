import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BaseDataService } from './base-data.service';
import { ExceptionService } from './exception.service';
import { ConfigService } from './config.service';

import { SampleData } from '../interfaces/sample-data';

type ResultModel = SampleData;

@Injectable()
export class SampleService extends BaseDataService {

  private readonly serviceName = 'sample-service';
  private readonly configName = 'sample-data';

  constructor(
    private http: Http,
    private configService: ConfigService,
    private exceptionService: ExceptionService
  ) { super(http, exceptionService); }

  get = <T>(configName: string, data?: any): Observable<T[]> => {
    const serviceDef = this.configService.getDefinition(this.serviceName, 'getItems', configName);
    return this.exec<T>(serviceDef, data);
  }

  post = <T>(configName: string, data?: any): Observable<T[]> => {
    const serviceDef = this.configService.getDefinition(this.serviceName, 'saveItems', configName);
    return this.exec<T>(serviceDef, data);
  }

  getItems = (configName: string, data?: any): Observable<ResultModel[]> => {
    return this.get<ResultModel>(configName, data);
  }

  saveItems = (configName: string, data?: any): Observable<number[]> => {
    return this.post<number>(configName, data);
  }
}
