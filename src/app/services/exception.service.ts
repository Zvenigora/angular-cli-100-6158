import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
// import { ErrorNotificationService } from './error-notification.service';

@Injectable()
export class ExceptionService {

  constructor(
  //  private errorNotification: ErrorNotificationService
  ) {}

  handleError = (error: Response | any): Observable<any> => {
    let errMsg: string;
    if (error instanceof Response) {
      // const body = error.json() || '';
      const body: any = this.extractBody(error);
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    // this.errorNotification.activate(`Error - ${errMsg}`);

    return Observable.of();
  }

  private extractBody = (error: Response) => {
    let body = '';
    try {
      body = error.json();
    } catch (e) {
      body = error.text();
    }
    return body;
  }
}
