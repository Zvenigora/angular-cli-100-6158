import { Component, OnInit } from '@angular/core';
import { SampleService } from '../../services/sample.service';

import { SampleData } from '../../interfaces/sample-data';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  providers: [
    SampleService
  ]
})
export class SampleComponent implements OnInit {

  models: SampleData[];
  errorMessage: string;

  private readonly configName = 'sample-data';

  constructor(private dataService: SampleService) { }

  ngOnInit() {
    this.getModels();
  }

  getModels() {
    this.dataService.getItems(this.configName)
                    .subscribe(models => this.models = models,
                               error =>  this.errorMessage = <any>error);
  }
}
