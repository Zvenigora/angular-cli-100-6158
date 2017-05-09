import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';
import { ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import * as _ from 'lodash';

import * as cnf from '../interfaces/service-config';
import { ExceptionService } from './exception.service';

@Injectable()
export class BaseDataService {

  constructor(
    private _http: Http,
    private exeptionService: ExceptionService
  ) {}

  exec = <T>(serviceDef: cnf.Definition, data?: any): Observable<T[]> => {
    switch (serviceDef.value.verb) {
      case 'get':
        return this.getData<T>(serviceDef.value.url);
      case 'post':
        return this.postData<T>(serviceDef.value.url, data);
    }
  }

  getData = <T>(url: string): Observable<T[]> => {
    return this._http.get(url)
                     .map(this.extractData)
                     .catch(this.exeptionService.handleError);
  }

  postData = <T>(url: string,
                 data: any,
                 withCredentials = true
                 ): Observable<T[]> => {
    data = _.isNil(data) ? {} : data;
    if (data) {
      const headers = new Headers({ 'Content-Type': 'application/json' });  // ToDo: Provide correct header
      const options = new RequestOptions({
        headers: headers,
        withCredentials: withCredentials
      });
      return this._http.post(url, data, options)
                       .map(this.extractData)
                       .catch(this.exeptionService.handleError);
    }
  }

  protected extractData = (res: Response): any[] => {
    const body = res.json();
    const value = body.data || body || [];
    const result = _.isArray(value) ? value : [value];
    return result;
  }

}
