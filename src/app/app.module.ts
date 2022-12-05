import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgHcaptchaModule} from 'ng-hcaptcha';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgHcaptchaModule.forRoot({
          // siteKey: '10000000-ffff-ffff-ffff-000000000001',
           siteKey: '2136544a-436a-44d3-8c23-055599669e1e',  
      languageCode: 'es' // optional, will default to browser language
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
