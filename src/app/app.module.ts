import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';
import { ConfigService } from './services/config.service';
import { ExceptionService } from './services/exception.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ConfigService,
    ExceptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
