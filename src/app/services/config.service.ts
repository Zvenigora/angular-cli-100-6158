import { Injectable } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import * as _ from 'lodash';

import * as cnf from '../interfaces/service-config';

const sampleDefinition: cnf.Definition  = {
  definition: 'getItems-json',
  value: {
      url: 'sample-data.json',
      verb: 'get'
  }
};

@Injectable()
export class ConfigService {

  demoVersion = false;
  baseHref = '/sample/dist/';   // look to ng build --base-href parameter

  jsonFolder = 'app/data';

  demoPrefix = 'src';           // before v1.0.0-beta.31 it should be empty string, after that
                                // we have to add 'src' in case of development server (issue #5064)

  constructor() { this.load(); }

  // This is simplified version of configuration loading

  load(): void {
    this.demoVersion = window.location.href.toLowerCase().includes('localhost:4200');
    this.baseHref = (this.demoVersion) ? this.demoPrefix : this.baseHref;
  }

  // Mock up configuration
  getDefinition = (serviceName: string, actionName: string, presentation?: string): cnf.Definition => {
    if (serviceName === 'sample-service' && actionName === 'getItems') {
      const definition = _.assign({}, sampleDefinition) as cnf.Definition;
      const url = '/' + [this.demoPrefix, this.jsonFolder, definition.value.url].join('/');
      definition.value.url = url;
      return definition;
    }

    return undefined;
  }
}
